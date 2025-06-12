import { MongoClient } from 'mongodb';
import { IMongoConfig } from 'src/config.types';

export interface TestDbConfig {
  describeName: string;
  mongoDB: IMongoConfig
}

export class TestMongoDb {
  private client: MongoClient | null = null;
  private dbName: string | null = null;
  private mongoConnectionInfo: IMongoConfig & {
    path: string;
  } | null = null;

  private getMongoConnectionInfo(mongoDB: IMongoConfig): (IMongoConfig & { path: string }) {
    // Use 'any' to avoid type constraint issues
    const { protocol, host, port, user, pass, params } = mongoDB;
    let path = `${protocol || "mongodb"}://${user}:${pass}@${host}${port ? `:${port}` : ''}`;

    if (params) {
      path = `${path}?${params}`
    }

    return {
      ...mongoDB,
      path,
    }
  }

  async getDBInfo({ describeName, mongoDB }: TestDbConfig) {
    if (this.mongoConnectionInfo && this.dbName) {
      return {
        ...this.mongoConnectionInfo,
        dbName: this.dbName
      };
    }
    // Generate a random number between 1 and 9999
    const randomNum = Math.floor(Math.random() * 9999) + 1;
    // Format the number to be 4 digits with leading zeros
    const formattedNum = randomNum.toString().padStart(4, '0');
    // Create unique database name
    this.dbName = `${describeName}-${formattedNum}`;

    // Connect to MongoDB using test configuration
    this.mongoConnectionInfo = this.getMongoConnectionInfo(mongoDB);

    return {
      ...this.mongoConnectionInfo,
      dbName: this.dbName
    };
  }

  // async setup({ describeName }: TestDbConfig) {
  //   // Generate a random number between 1 and 9999
  //   const randomNum = Math.floor(Math.random() * 9999) + 1;
  //   // Format the number to be 4 digits with leading zeros
  //   const formattedNum = randomNum.toString().padStart(4, '0');
  //   // Create unique database name
  //   this.dbName = `${describeName}-${formattedNum}`;

  //   // Connect to MongoDB using test configuration
  //   const { path } = this.getMongoConnectionInfo();
  //   this.client = new MongoClient(path);
  //   await this.client.connect();

  //   console.log(`Created test database: ${this.dbName}`);
  //   return {
  //     client: this.client,
  //     db: this.getDb(),
  //     dbName: this.dbName
  //   };
  // }

  getClient() {
    if (this.client) {
      return this.client
    }
    if (!this.mongoConnectionInfo) {
      throw new Error(`there's no path for getClient`)
    }
    this.client = new MongoClient(this.mongoConnectionInfo.path)
    return this.client
  }

  async teardown() {
    if (this.mongoConnectionInfo && this.dbName) {
      // Drop the test database
      await this.getClient().db(this.dbName).dropDatabase();
      console.log(`Dropped test database: ${this.dbName}`);

      // Close MongoDB connection
      await this.getClient().close();
      this.client = null;
      this.dbName = null;
    }
  }

  async cleanup() {
    if (this.mongoConnectionInfo && this.dbName) {
      // Clean up the test database collections
      const db = this.getClient().db(this.dbName);
      await db.collection('courses').deleteMany({});
    }
  }
}

// Create a new instance for each test suite
export function createTestMongoDb() {
  return new TestMongoDb();
} 
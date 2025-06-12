import { MongoClient, Db } from 'mongodb';
import config from 'config';

export interface TestDbConfig {
  describeName: string;
}

export class TestMongoDb {
  private client: MongoClient | null = null;
  private dbName: string | null = null;

  private getMongoUri(): string {
    // Use 'any' to avoid type constraint issues
    const { host, port, user, pass, params } = config.testMongoDB;
    let path = `mongodb://${user}:${pass}@${host}:${port}`;

    if (params) {
      path = `${path}?${params}`
    }

    return path
  }

  async setup({ describeName }: TestDbConfig) {
    // Generate a random number between 1 and 9999
    const randomNum = Math.floor(Math.random() * 9999) + 1;
    // Format the number to be 4 digits with leading zeros
    const formattedNum = randomNum.toString().padStart(4, '0');
    // Create unique database name
    this.dbName = `${describeName}-${formattedNum}`;

    // Connect to MongoDB using test configuration
    const uri = this.getMongoUri();
    this.client = new MongoClient(uri);
    await this.client.connect();
    
    console.log(`Created test database: ${this.dbName}`);
    return {
      client: this.client,
      db: this.getDb(),
      dbName: this.dbName
    };
  }

  async teardown() {
    if (this.client && this.dbName) {
      // Drop the test database
      await this.client.db(this.dbName).dropDatabase();
      console.log(`Dropped test database: ${this.dbName}`);
      
      // Close MongoDB connection
      await this.client.close();
      this.client = null;
      this.dbName = null;
    }
  }

  async cleanup() {
    if (this.client && this.dbName) {
      // Clean up the test database collections
      const db = this.client.db(this.dbName);
      await db.collection('courses').deleteMany({});
    }
  }

  getDb(): Db {
    if (!this.client || !this.dbName) {
      throw new Error('Test database not initialized. Call setup first.');
    }
    return this.client.db(this.dbName);
  }
}

// Create a new instance for each test suite
export function createTestMongoDb() {
  return new TestMongoDb();
} 
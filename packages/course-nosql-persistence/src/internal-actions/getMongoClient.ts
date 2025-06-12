import { MongoClient } from "mongodb";
import config from 'config'

export interface GetMongoClient {
    (): Promise<MongoClient> 
}

export function buildGetMongoClient(config: config.IMongoConfig): GetMongoClient {
    let cachedMongoClient: MongoClient | null = null;

    return async () => {
        if (cachedMongoClient) {
            return cachedMongoClient;
        }
    
        const {
            host,
            port,
            dbName,
            user,
            pass,
        } = config;
    
        const uri = `mongodb://${user}:${pass}@${host}:${port}/${dbName}`;
    
        const client = new MongoClient(uri);
        await client.connect();
        cachedMongoClient = client;
        return client;
    }
}

import { MongoClient } from "mongodb";
import config from 'config'

let cachedMongoClient: MongoClient | null = null;

export async function getMongoClient(): Promise<MongoClient> {
    if (cachedMongoClient) {
        return cachedMongoClient;
    }

    const {
        host,
        port,
        dbName,
        user,
        pass,
    } = config.mongodb;

    const uri = `mongodb://${user}:${pass}@${host}:${port}/${dbName}`;

    const client = new MongoClient(uri);
    await client.connect();
    cachedMongoClient = client;
    return client;
}

import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

const MONGODB_URI = process.env["MONGODB_URI"] || "mongodb://localhost:27017";

export async function getMongoClient(): Promise<MongoClient> {
    if (!client) {
        client = await MongoClient.connect(MONGODB_URI);
    }

    return client;
}

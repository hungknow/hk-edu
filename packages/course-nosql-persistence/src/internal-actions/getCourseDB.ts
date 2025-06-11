import { Db } from "mongodb";
import { getMongoClient } from "./getMongoClient";
import config from 'config';

let db: Db | null = null;

export async function getCourseDB(): Promise<Db> {
    if (!db) {
        const client = await getMongoClient();
        db = client.db(config.mongodb.dbName);
    }

    return db;
}

import { Db } from "mongodb";
import { getMongoClient } from "./getMongoClient";

let db: Db | null = null;

const DB_NAME = "hk-edu";

export async function getCourseDB(): Promise<Db> {
    if (!db) {
        const client = await getMongoClient();
        db = client.db(DB_NAME);
    }

    return db;
}

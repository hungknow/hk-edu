import type { Db } from "mongodb";
import type { GetMongoClient } from "./getMongoClient";

export interface GetCourseDB {
    (): Promise<Db>
}

export function buildGetCourseDB(getMongoClient: GetMongoClient, dbName: string): GetCourseDB {
    let db: Db | null = null;

    return async () => {
        if (!db) {
            const client = await getMongoClient();
            const newDb: Db = client.db(dbName);
            db = newDb
            return newDb
        }

        return db;
    }
}

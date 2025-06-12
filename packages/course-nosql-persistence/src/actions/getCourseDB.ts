import type { Db } from "mongodb";
import type { GetMongoClient } from "./getMongoClient";
import type { IMongoConfig } from "../config.types";

export interface GetCourseDB {
    (): Promise<Db>
}

export interface BuildGetCourseDBParams {
    getMongoClient: GetMongoClient;
    courseMongoDBCredentials: IMongoConfig
}

export function buildGetCourseDB({ getMongoClient, courseMongoDBCredentials }: BuildGetCourseDBParams): GetCourseDB {
    let db: Db | null = null;

    return async () => {
        if (!db) {
            const client = await getMongoClient();
            const newDb: Db = client.db(courseMongoDBCredentials.dbName);
            db = newDb
            return newDb
        }

        return db;
    }
}

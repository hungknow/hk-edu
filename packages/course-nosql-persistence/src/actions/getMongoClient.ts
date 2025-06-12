import { MongoClient } from "mongodb";
import type { IMongoConfig } from "../config.types";

export interface GetMongoClient {
    (): Promise<MongoClient>
}

export interface BuildGetMongoClientParams {
    courseMongoDBCredentials: IMongoConfig
}

export function buildGetMongoClient({
    courseMongoDBCredentials
}: BuildGetMongoClientParams): GetMongoClient {
    let cachedMongoClient: MongoClient | null = null;

    return async () => {
        if (cachedMongoClient) {
            return cachedMongoClient;
        }
        const {
            protocol,
            host,
            port,
            user,
            pass,
        } = courseMongoDBCredentials

        const uri = `${protocol ?? "mongodb"}://${user}:${pass}@${host}${port ? `:${port}` : ''}`;

        const client = new MongoClient(uri);
        await client.connect();
        cachedMongoClient = client;
        return client;
    }
}

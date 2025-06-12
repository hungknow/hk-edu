export interface IMongoConfig {
    protocol: string
    host: string
    port: number
    dbName: string
    user: string
    pass: string
    params?: string
}

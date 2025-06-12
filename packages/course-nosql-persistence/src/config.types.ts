export interface IMongoConfig {
    protocol: string
    host: string
    port: number
    dbName: string
    user: string
    pass: string
}

export interface ITestMongoConfig {
    host: string
    port: number
    user: string
    pass: string
    params?: string
}

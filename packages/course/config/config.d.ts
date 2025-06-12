// Make sure you import from the original module!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IConfig } from 'config'

declare module 'config' {
    interface IMongoConfig {
        host: string
        port: number
        dbName: string
        user: string
        pass: string
    }

    interface ITestMongoConfig {
        host: string
        port: number
        user: string
        pass: string
        params?: string
    }

    // Declare the type of `config` variable
    interface IConfig {
        mongodb: IMongoConfig       // Declare the mongodb variable in `config` variable
        testMongoDB: ITestMongoConfig   // Declare the credentials for database used for testing
    }
} 
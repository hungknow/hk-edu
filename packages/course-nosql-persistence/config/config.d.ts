// Make sure you import from the original module!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IConfig } from 'config'
import type { IMongoConfig, ITestMongoConfig } from '../src/config.types'

declare module 'config' {
    // Declare the type of `config` variable
    interface IConfig {
        mongodb: IMongoConfig       // Declare the mongodb variable in `config` variable
        testMongoDB: ITestMongoConfig   // Declare the credentials for database used for testing
    }
} 
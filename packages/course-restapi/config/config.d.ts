// Make sure you import from the original module!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IConfig } from 'config'
import type { IMongoConfig, ITestMongoConfig } from '@hk/course-nosql-persistence'

declare module 'config' {
    // Declare the type of `config` variable
    interface IConfig {
        courseDBMongo: IMongoConfig       // Declare the mongodb variable in `config` variable
        testMongoDB: ITestMongoConfig   // Declare the credentials for database used for testing
    }
} 
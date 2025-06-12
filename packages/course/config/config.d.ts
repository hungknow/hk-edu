// Make sure you import from the original module!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IConfig } from 'config'
import type { IMongoConfig } from '@hk/course-nosql-persistence'

declare module 'config' {

    // Declare the type of `config` variable
    interface IConfig {
        mongodb: IMongoConfig           // Declare the mongodb variable in `config` variable
    }
} 
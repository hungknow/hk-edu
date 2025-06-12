// Make sure you import from the original module!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IConfig } from 'config'
import type { IMongoConfig } from '../src/config.types'

declare module 'config' {
    // Declare the type of `config` variable
    interface IConfig {
        courseDBMongo: IMongoConfig       // Declare the mongodb variable in `config` variable
    }
} 
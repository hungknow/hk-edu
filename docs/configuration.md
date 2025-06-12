## Configuration

The target package must install `config` and `@types/config` packages.

```sh
pnpm install config
pnpm install @types/config -D
```

### File structure

```
project
|- config
   |- config.d.ts           // Typescript types of `config` variable
   |- default.json
   |- custom-environment-variable.json
```

### `config.d.ts` file
Declare the typescript type

```typescript
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

    // Declare the type of `config` variable
    interface IConfig {
        mongodb: IMongoConfig // Declare the mongodb variable in `config` variable
    }
}
```

### `custom-environment-variable.json` file

Map the value of environment variable to the configuration.

Here's the example of `custom-environment-variable.json` file
```json
{
    "mongodb": {
      "host": "MONGODB_DB_HOST",    // Map environment variable "MONGODB_DB_HOST" to config.mongodb.host
      "dbName": "MONGODB_DB_NAME",  // Map environment variable "MONGODB_DB_NAME" to config.mongodb.dbName
      "user": "MONGODB_DB_USER",
      "pass": "MONGODB_DB_PASS"
    }
}
```

## Example use

Here's the example of how to access config.
```typescript
import config from 'config'

// The below line access environment variable "MONGODB_DB_HOST"
config.mongodb.host
```

## Reference links for AI Model
- [`config` package](mdc:https://www.npmjs.com/package/config)
import { asFunction, asValue, AwilixContainer } from "awilix"
import { buildCreateCourseEntity, buildGetCourseDB, buildGetCourseEntities, buildGetMongoClient } from "../actions"
import type { IMongoConfig } from "src/config.types"

export function awilixRegisterActions(container: AwilixContainer) {
    return container.register({
        createCourseEntity: asFunction(buildCreateCourseEntity).singleton(),
        getCourseEntities: asFunction(buildGetCourseEntities).singleton(),
        getCourseDB: asFunction(buildGetCourseDB).singleton(),
        getMongoClient: asFunction(buildGetMongoClient).singleton(),
    })
}

export function awilixRegisterCourseMongoDBCredentials(container: AwilixContainer, mongoConfig: IMongoConfig) {
    return container.register({
        courseMongoDBCredentials: asValue(mongoConfig)
    })
}

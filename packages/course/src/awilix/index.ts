import { asFunction, AwilixContainer } from "awilix"
import { buildCreateCourse, buildGetCourses } from "src/actions"

export function awilixRegisterActions(container: AwilixContainer) {

    container.register({
        createCourse: asFunction(buildCreateCourse).singleton(),
        getCourses: asFunction(buildGetCourses).singleton(),
    })

    return container
}

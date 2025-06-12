### File tree

```
package
|- src
   |- actions
      |- createCourse.ts
   |- awilix
      |- index.ts
```

### Action Pattern

For the package that have two directories `src/actions` and `src/awilix`,
- For all actions in folder `src/actions`, we **must** register the actions to `AwilixContainer`

Example of `awilix/index.ts` file
```typescript
import { asFunction, AwilixContainer } from "awilix"
// Import all available actions from "actions" folder
import { buildCreateCourse, buildGetCourses } from "src/actions"

// Function to register actions to awilix
export function awilixRegisterActions(container: AwilixContainer) {
    return container.register({
        // Register the `createCourse` to function `buildCreateCourse`
        createCourse: asFunction(buildCreateCourse).singleton(),
        getCourses: asFunction(buildGetCourses).singleton(),
    })
}
```
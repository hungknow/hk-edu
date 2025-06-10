Define the domain objects for `course`.

## File structure

```
course-pub
|- src
   |- actions
      |- course.ts          // Define the Action interfaces for Course as the main subject
      |- lesson.ts          // Define the Action interfaces for Lesson as the main subject
   |- models                // Define the models of `course` application. The models will be used by `course` and `course-restapi` packages
      |- course.ts          // Define the Typescript interfaces for Course
      |- lesson.ts          // Define the typescript interfaces for Lesson
```

The interface of actions follow the meanings and rules declared in [actionPattern.md](../actionPattern.md)

## Model
The model is defined by using `zod`.

```typescript
import { z } from "zod";

export const zCourse = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
});

export type Course = z.infer<typeof zCourse>;
```

List of actions interface can be refer

## Notes
- This package doesn't depend on the following libraries
    - `packages/course-restapi-pub`
- The models of package `course-pub` must be defined in the package `course-pub`.
## File structure

```
course-restapi
|- src
   |- handlers                  // Define the RestAPI handlers in this folder
      |- index.ts
      |- getCourses.ts              // RestAPI handler for `GET /v1/course` path
      |- postCourses.ts             // RestAPI handler for `POST /v1/course` path
      |- postCoursesLessons.ts      // RestAPI handler for `POST /v1/course/lessons` path
   |- routes.ts                     // Map the RestAPI handlers to the URL path
|- tests
   | handlers
      |- getCourses.test.ts    // The integration tests for `GET /v1/course` path
```

## Models

The request/response models must be referenced from [`course-restapi-pub`](../../packages/course-restapi-pub/package.json) package.
Don't define the RestAPI request/response model in the package `course-restapi`.

## Logic rules
- There's no business logic handling in `api` folder.
- The business logic follow to [Action pattern](../actionPattern.md)

## Tests
- Integration tests are written in `tests` folder
- Unit tests are written in the same folder as the source code file

### Reference for AI model
- [`course-restapi-pub`](mdc:packages/course-restapi-pub)
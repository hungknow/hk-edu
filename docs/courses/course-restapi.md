## File structure

The filename is decided by the RestAPI path.

With the following URLs, course is the parent subpath, so define the RestAPI handlers and its logic action pattern in `course.ts` filename.
- `/v1/course/`
- `/v1/course/lessons`


```
course-restapi
|- src
   |- api                  // Define the RestAPI handlers in this folder
      |- index.ts
      |- course.ts         // RestAPI handlers for `/v1/course/***` path
   |- actions              // Contains all business logics 
      |- course.ts         // The business logic handling for `course` API
      |- course.test.ts    // The unit test of `course.ts` file
|- tests
   | api
      |- course.test.ts    // The integration tests for Course API
```

## Models

The request/response models must be reference from [`course-restapi-pub`](../../packages/course-restapi-pub/package.json) package.
Don't define the RestAPI request/response model in the package `course-restapi`.

## Logic rules
- There's no business logic handling in `api` folder.
- The business logic follow to [Action pattern](../actionPattern.md)

## Tests
- Integration tests are written in `tests` folder
- Unit tests are written in the same folder as the source code file

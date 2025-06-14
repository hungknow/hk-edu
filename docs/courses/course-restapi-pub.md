Define the request/response models used for RestAPI. These models are used by the Frontend packages, e.g. `course-react`, `course-restapi`.

## File structure

```
course-restapi-pub
|- src
   |- index.ts       // Export all generated types from other files
   |- types.gen.ts   // The Typescript interfaces for request/response models generated from `openapi.yaml` file
   |- sdk.gen.ts     // Http Client
   |- zos.gen.ts     // Declare the Zod type, used for validation
|- openapi.yaml      // THe OpenAPI specification for `course-restapi`
```

## Request/Response Models

The request/response models (Typescript interfaces) are generated by tool `openapi-ts`

## `openapi-ts`
```sh
// Run in folder `packages/course-restapi-pub`
pnpm run openapi-ts
```

Or run the command line from root folder
```sh
npx nx run course-restapi-pub:openapi-ts
```

The above command line generates file
- [`types.gen.ts`](../../packages/course-restapi-pub/src/types.gen.ts): The request/response models (Typescript interface)
- [`sdk.gen.ts`](../../packages/course-restapi-pub/src/sdk.gen.ts): The HTTP client for `course` RestAPI handler. The React UI components use the functions declared in this file to fetch the data from RestAPI server.
- [`zod.gen.ts`](../../packages/course-restapi-pub/src/zod.gen.ts): The Zod interfaces define for all request/response models

## Reference for AI model
- [`types.gen.ts`](mdc:packages/course-restapi-pub/src/types.gen.ts)
- [`sdk.gen.ts`](mdc:packages/course-restapi-pub/src/sdk.gen.ts)
- [`zod.gen.ts`](mdc:packages/course-restapi-pub/src/zod.gen.ts)
- [`actionPattern.md`](mdc:docs/actionPattern.md)
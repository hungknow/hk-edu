The REST API of `courses`.

The OpenAPI specification for this API is defined in [course-restapi-pub/openapi.yaml](../../packages/course-restapi-pub/openapi.yaml). This `openapi.yaml` file serves as the single source of truth for the API definition. Client code and models for the REST API are generated from this `openapi.yaml` file using the `@hey-api/openapi-ts` tool. After any updates to the OpenAPI specification (e.g., changes to `openapi.yaml`), the AI model **must execute** the command `npm run openapi-ts` within the `[course-restapi-pub](../../packages/course-restapi-pub/)` folder to regenerate the client code.


The models of course RESTAPI is defined in package [`course-restapi-pub`](../../packages/course-restapi-pub/).
The implementation of RestAPI server is implemented in package [`course-restapi`](../../packages/course-restapi).

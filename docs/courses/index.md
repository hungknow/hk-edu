The course module mainly compose of several packages.
- [`course-pub`](./course.md): Containing the models and util methods that are commonly used with models. This package is lightweight as much as possible with no dependencies.
- [`course`](./course.md): Containing the business-domain services of the course. Depending on `course-pub` for models and util methods.
- [`course-restapi-pub`](./courseRestAPI.md): The typescript client for `course-restapi`. The OpenAPI specification is generated in this package.
- [`course-restapi`](./courseRestAPI.md): Implementation of RestAPI related to the course. The models are implemented in `course-restapi-pub` package.
- [`course-ui-react`](./courseReact/index.md): List of React component implementing for displaying course. This package mainly depends on `course-restapi-client`, not depending on `course-pub`.

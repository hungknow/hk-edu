The course module mainly compose of several packages.
- [`course-pub`](./course.md): Containing the models and the interface of services. This package is lightweight as much as possible with no dependencies.
- [`course`](./course.md): Containing the business-domain services of the course
- [`course-restapi-client`](./courseRestAPI.md): The typescript client for `course-restapi`
- [`course-restapi`](./courseRestAPI.md): Implementation of RESTAPI related to the course
- [`course-ui-react`](./courseReact/index.md): List of React component implementing for displaying course. This package mainly depends on `course-restapi-client`, not depending on `course-pub`.

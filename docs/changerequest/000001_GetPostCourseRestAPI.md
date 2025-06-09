With the definition in [openapi.yaml](../packages/course-restapi-pub/openapi.yaml)

- Generate the models in `course-restapi-pub` package
- Define action interfaces in `course-pub` package

- Define actions in `course` package
- Implement the RestAPI handlers for `POST /v1/courses` and `GET /v1/courses` in `course-restapi` package

### Persistence
- Implement the actions for persisting the course into DB

### Actions
Define new actions which are necessary for RestAPI handler
    - `CreateCourse`
    - `GetCourses`

### Unit tests
- Add mock test for actions in `course` package

### Integration tests
- Add integrations tests for RestAPI in `course-restapi` package

#### List of test cases
- Post the new course
- Get list of courses. Confirm there are one course and the course's data are valid
- Post another new course
- Get list of courses. Confirm there are two courses and their data are valid
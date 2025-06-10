With the definition in [`openapi.yaml`](../../packages/course-restapi-pub/openapi.yaml)

### Intructions for AI
- Generate the models in `course-restapi-pub` package
- Define action interfaces in `course-pub` package
- Define action implementation in `course` package
- Define the entities in `course-nosql-persistence` package
- Implement the action interfaces and implementation in `course-nosql-persistence` package
- Implement the RestAPI handlers for `POST /v1/courses` and `GET /v1/courses` in `course-restapi` package

### Actions
Define new actions which are necessary for RestAPI handler
- [`CreateCourse`](../courses/course-actions.md#createcourse)
- [`GetCourses`](../courses/course-actions.md#getcourses) 
- [`CreateCourseEntity`](../courses/course-nosql-persistence/actions.md#createcourseentity)
- [`GetCourseEntities`](../courses/course-nosql-persistence/actions.md#getcourseentities)

### RestAPI Handler

#### `POST /v1/courses`
- Verify the provided data by `zod`
- Call `CreateCourse` action to create course

#### `GET /v1/courses`
- Call `GetCourses` to prepare the data 

### Unit tests
- Add mock test for actions in `course` package

### Integration tests
- Add integrations tests for RestAPI in `course-restapi` package

#### List of test cases
- Post the new course
- Get list of courses. Confirm there are one course and the course's data are valid
- Post another new course
- Get list of courses. Confirm there are two courses and their data are valid

### Reference for AI models:
- [openapi.yaml](mdc:src/packages/course-restapi-pub/openapi.yaml)
- [`CreateCourse`](mdc:docs/courses/course-actions.md#createcourse)
- [`GetCourses`](mdc:docs/courses/course-actions.md#getcourses) 
- [`CreateCourseEntity`](mdc:docs/courses/course-nosql-persistence/actions.md#createcourseentity)
- [`GetCourseEntities`](mdc:docs/courses/course-nosql-persistence/actions.md#getcourseentities)

Here's the list of integration tests.

## `CrudCourse`

- Call `CreateCourse` action to create course 1 with empty ID
- Call `GetCourses` action, expect there's only one course and the course matching the course 1
- Call `CreateCourse` action to create course 2 with pre-filled ID
- Call `GetCourses` action, expect there's only two courses and the courses matching the course 1 and course 2.


## Reference for AI model
- [`CreateCourse`](mdc:docs/course-actions.md)
- [`GetCourses`](mdc:docs/course-actions.md)
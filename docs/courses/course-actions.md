### Actions

List of actions used by `course` and `course-pub` packages.

#### <a name="CreateCourse">CreateCourse</a>
```typescript
function CreateCourse(course: Course): Promise<Course>
```
- Receive the initial course in parameter, the `id` can be empty.
- If `id` is prefilled, try to use it in course entity.
- Call [`CreateCourseEntity`](./course-nosql-persistence/actions.md#createcourseentity) [`CreateCourseEntity`](mdc:packages/course-nosql-persistence/actions.md#createcourseentity) action to persist

#### <a name="GetCourses">GetCourses</a>
```typescript
function GetCourses(): Promise<GetCourses>
```
- Call [`GetCourseEntities`](./course-nosql-persistence/actions.md#getcourseentities) [GetCourseEntities](mdc:docs/course-nosql-persistence/actions.md#getcourseentities) to get list of courses
- Map the course entity into course model

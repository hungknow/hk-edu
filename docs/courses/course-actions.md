### Actions

List of actions used by `course` and `course-pub` packages.

#### <a name="CreateCourse">CreateCourse</a>
```typescript
function CreateCourse(course: Course): Promise<Course>
```
- Receive the initial course in parameter, the `id` can be empty.
- If `id` is prefilled, try to use it in course entity.
- Call `CreateCourseEntity` to persist

#### <a name="GetCourses">GetCourses</a>
```typescript
function GetCourses(): Promise<GetCourses>
```
- Call `GetCourseEntities` to get list of courses
- Map the course entity into course model

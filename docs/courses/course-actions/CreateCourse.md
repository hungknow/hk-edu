#### <a name="CreateCourse">CreateCourse</a>
```typescript
function CreateCourse(course: Course): Promise<Course>
```
- Receive the initial course in parameter, the `id` can be empty.
- If `id` is prefilled, try to use it in course entity.
- Call [`CreateCourseEntity`](./course-nosql-persistence/actions.md#createcourseentity) [`CreateCourseEntity`](mdc:packages/course-nosql-persistence/actions.md#createcourseentity) action to persist

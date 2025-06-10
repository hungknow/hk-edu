### Actions

#### <a name="CreateCourseEntity">CreateCourseEntity</a>

```typescript
function CreateCourseEntity(course: CourseEntity) {}
```
Save the entities into the collection `courses`.

#### <a name="GetCourseEntities">GetCourseEntities</a>

```typescript
function GetCourseEntities(): Promise<CourseEntity[]> {}
```

Query the list of available `courses` from collection `courses`.

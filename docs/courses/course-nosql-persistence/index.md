
# Persistence

Reference the definition of NoSQL entities from [document](../../mongodb/index.md) [document](mdc:docs/mongodb/index.md)
Use MongoDB to store the entity. Not memory repository.

Providing the list of action

## File structure

```
course-nosql-persistence
|- src
   |- entities
      |- index.ts
      |- course.ts          // Define all entities for course
   |- actions
      |- index.ts
      |- createCourseEntity.ts   // Implement the action `CreateCourseEntity`
      |- getCourseEntityByID.ts
      |- addLessonEntityToCourseEntity.ts
```

## MongoDB
- `courses`
    - Storing the course's own properties
    - The field `participants` is the map of user ID and their roles array. One participant can have multiple roles.
    ```json
    {
        // Field containing the user id and their roles
        "participants": {
            "userId1": {
                // The name of role
                "student": {
                    // "timestamps" field containing the duration when this role is valid
                    "timestamps": [
                        // Absolete period
                        {
                            "startTimestamp": "2025-05-01T00:28:57.813Z",
                            "endTimestamp": "2025-05-03T00:28:57.813Z",
                        },
                        // New registration
                        {
                            "startTimestamp": "2025-06-01T00:28:57.813Z",
                            "endTimestamp": "2025-06-03T00:28:57.813Z",
                        }
                    ]
                }
            }
        }
    }
    ```

## Notes
- `course-nosql-persistence` package cannot depend on other `-pub` packages. It defines its own models and entities.
- **Must** `Entity` as the suffix for entity interfaces. Not adding other text, e.g. "Schema"
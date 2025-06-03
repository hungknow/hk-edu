Course is the object.

This is the course's own properties.
- Thumbnail
- Description
- The list of lessons
- Creator

Interaction with users
- Participants

Pricing
- Price
- Promotion

The permissions on the course can be reference in the [document](../permissions/index.md).

# REST API

### GET `/v1/courses/`
Get the list of available courses

```json
{
    "courses": [
        {
            "id": "course_id_1",
            "name": "Name of course",
            "description": "The short description of the course displayed below the name",
            "thumbnailUrl": "/files/course_thumbnail_id_1.png",
        }
    ]
}
```

### POST `/v1/courses/search`
Search the courses by the parameters

Input
```json
{
    "courseName": "some text",
}
```

Output
```json
{
    "searchResult": []
}
```

### GET `/v1/courses/{course_id}`
Get the detail of a specific course by its ID

# Services


# Persistence

## NoSQL
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



References
- [Participants of course](./courseParticipant.md)
- [Pricing of course](./coursePricing.md)

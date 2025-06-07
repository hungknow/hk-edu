The REST API of `courses`.

The OpenAPI document is generated at [link](../../packages/course-restapi-pub/openapi.yaml)
The implementation of RestAPI server is implement in folder [`course-restapi`](../../packages/course-restapi)

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

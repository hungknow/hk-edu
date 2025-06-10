Course is the domain object. The other libraries import and export into this format, no matter it is using Postgres, MongoDB, RestAPI request/response models.

This is the course's own properties.
- Thumbnail
- Description
- The list of lessons
- Creator

The permissions on the course can be reference in the [document](../../permissions/index.md).

## <a name="models">Domain model</a>
The models define the business domain models used by the `courses` module.
The JSON field use the camelCase naming convention.

- Course
    - `id`: 
    - `createdByUserID`: The course can be created by a specific user
    - `createdAt`: The timestamp at which this course is generated
    - `title`: The main content of this course
    - `description`: The short description of this course
    - `thumbnailFileID`: The File UUID, which store the thumbnail
    - `iconFileID`: The file UUID, which store the icon of the course 
    - `lessonIDs`: The list of lesson IDs. The order of Ids in this array is the order of lesson
    - `classTimeSlots`: List of available class timeslots. 
        - The format is "type | data_of_type | start_time| end_time", start_time and end_time is 24 hours format without space.
            - The available enum for type is
                - "w", the week day. The valid data of `data_of_type` is [0-6].
                - "d", the specific day. The valid data of `data_of_type` is ISO string
        ```json
        {
            "classTimeSlots": [
                {
                    // ISO string representing the 00:00 AM of start date
                    "startTimestamp": "2025-06-03T00:00:00.000Z",
                    "endTimestamp": "2025-07-03T00:00:00.000Z",
                    "slots": 
                        // Monday, Wednesday, Friday from 17:30 to 21:00
                        [
                            "w|0|1730|2100",
                            "w|2|1730|2100",
                            "w|4|1730|2100"
                        ],
                },
                {
                    "startTimestamp": "2025-06-03T00:00:00.000Z",
                    "endTimestamp": "2025-07-03T00:00:00.000Z",
                    // Tuesday, Thursday, Saturday from 17:30 to 21:00
                    "slots": [
                        "w|1|1730|2100",
                        "w|3|1730|2100",
                        "w|5|1730|2100"
                    ]
                    
                }
            ]
        }
        ```

## Service Actions

### `CreateCourse`
- Validate if the fields in the provided course model are valid.
- Create the initial new course with default value. The list of lessons IDs are empty.
- Call `CreateCourseDB` action to persist the course into the database

### `GetCourseByID`

## Actions for persistence
- `UpdateCourseDB`


References
- [Participants of course](./courseParticipant.md)
- [Pricing of course](./coursePricing.md)
- [Rest API](./courseRestAPI.md)
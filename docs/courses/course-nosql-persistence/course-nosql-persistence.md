
# Persistence

Reference the definition of NoSQL from [document](../../mongodb/index.md)

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

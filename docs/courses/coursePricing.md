The price of the course.

# RestAPI

# Service

- `GET /v1/course/{courseID}/pricing`: Returns the pricing of the course.
    ```json
    {
        "courseID": "course_id_1",
        // the final pricing after the promotion if available
        "final_pricing": {
            "currency": "vnd",
            "amount": "1000000",
        },
        // The initial pricing before the promotion
        "initialPricing": {
            "currency": "vnd",
            "amount": "2000000",
        },
        "promotion": {
            "type": "percentage",
            "amount": "50",
        }
    }
    ```

# Persistence
- `pricing`
    ```json
    {
        "courses": [
            {
                "courseID": "course_1",
                "price": {
                    "amount": "100000000",
                    "currency": "vnd"
                },
                "userID": "user_id_1",
            }
        ]
    }
    ```
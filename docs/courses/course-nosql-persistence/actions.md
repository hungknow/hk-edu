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


### Internal Actions

The internal actions are defined in `internal-actions` directory.

#### <a name="GetMongoClient">GetMongoClient</a>

```typescript
import { MongoClient } from "mongodb"

function getMongoClient(): Promise<MongoClient>
```

- Use the following variables from `config` to prepare the instance of MongoClient
    - `mongodb.host`
    - `mongodb.port`
    - `mongodb.user`
    - `mongodb.pass`
    - `mongodb.dbName`
- Cache the instance of MongoClient, return the existing instance if there's available. Otherwise, creating the new instance.

#### <a name="getCourseDB">GetCourseDB</a>
This is the internal actions used by `course-nosql-entities` only

```typescript
import { Db } from "mongodb";

function getCourseDB(): Promise<Db>
```
- Use the `config.mongodb.dbName` variable to get database name
- Use MongoClient from `GetMongoClient` to get `Db`
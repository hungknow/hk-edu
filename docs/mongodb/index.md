- In Typescript, use `mongodb` library to execute CRUD on the collections. Don't use any ORM library.

The object type is designed for Database **must** have the suffix `Entity`.

```typescript
import { z } from "zod";
import { ObjectId } from "mongodb";

export const zCourseEntity = z.object({
  _id: z.instanceof(ObjectId),
  name: z.string(),
  title: z.string(),
});

export type CourseEntity = z.infer<typeof zCourseEntity>;
```

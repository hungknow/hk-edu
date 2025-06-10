# Action Pattern in TypeScript

The Action Pattern is a design pattern that encapsulates operations as objects. This pattern is particularly useful in TypeScript applications for managing business logic, domain operations, and state changes in a type-safe and maintainable way.

The properties of an action 
- It should have a name which is self-explanatory on what it does eg: CreateCourse, AddLessonToCourse, UpdateLesson. The name follow naming pattern `{Verb}{MainObject}{To|Of}{TargetObject}`.
- It must be request/response agnostic. It doesn’t deal with the Request class, nor does it send a Response back. This responsibility is handled by the RestAPI handler.
- It can have other actions as a dependency.
- It must enforce business rules by throwing an Exception if anything prevent it from executing and/or returning the expected value, and leave the caller the responsability of how to render/respond to the exception.
- Each action must define in an distinct file, it's helpful to mock other dependencies in the unit test.
- The Action interface is define in package with name pattern `packageA-pub`. The real implementation of action is defined in `packageA` package.

## Core Concepts

1. **Action Interface**: An action is defined as a function interface that describes a specific operation.
2. **Immutability**: Actions should not modify their input parameters directly.
3. **Single Responsibility**: Each action should perform one specific task.
4. **Type Safety**: TypeScript's type system ensures that actions are used correctly.

## Pattern Structure

```typescript
// Action interface definition
export interface CreateCourse {
    (input: InputType): OutputType
}

```

## Examples

### 1. Simple Action

```typescript
// Define the action interface. Define in `packageA-pub` package
export interface CreateCourse {
    (initialCourse: Course): void;
}

// Implement the action in `packageA` package
export const createCourse: CreateCourse = (initialCourse) => {
    // Implementation details
};
```

### 2. Action with Result

```typescript
interface FetchCourseById {
    (courseId: string): Promise<Course>;
}

export const fetchCourseById: FetchCourseById = async (courseId) => {
    // Implementation details
    return course;
};
```

### 3. Action has other Actions as dependency


```typescript
import { notifySystem } from './notifySystem'

// Define the action interface
export interface CreateLesson {
    (initialLesson: Lesson): Promise<void>;
}

// Implement the action
export const createLesson: CreateLesson = async (initialLesson) => {
    // Use the action directly. Jest can mock `notifySystem`
    await notifySystem('parameter1')
};
```


## Best Practices

1. **Naming Conventions**
   - Use verb-noun combinations for action names
   - Be descriptive and specific
   - Example: `CreateCourse`, `AddLessonToCourse`, `UpdateTitleOfCourse`

2. **Type Definition**
   - Define clear input and output types
   - Use TypeScript's built-in utility types when appropriate
   - Consider making immutable types using `readonly`

## Testing

Actions are easily testable due to their functional nature:

```typescript
describe('CreateCourse', () => {
    it('should create a new course', () => {
        const createCourse: CreateCourse = (course) => {
            // Test implementation
        };
        
        const course = { /* course data */ };
        const result = createCourse(course);
        expect(result).toBeDefined();
    });
});
```

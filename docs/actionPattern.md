# Action Pattern in TypeScript

The Action Pattern is a design pattern that encapsulates operations as objects. This pattern is particularly useful in TypeScript applications for managing business logic, domain operations, and state changes in a type-safe and maintainable way.

The properties of an action 
- It should have a name which is self-explanatory on what it does eg: CreateCourse, AddLessonToCourse, UpdateLesson. The name follow naming pattern `{Verb}{MainObject}{To|Of}{TargetObject}`. Example for Action interface: `CreateCourse`, `AddLessonToCourse`, `UpdateTitleOfCourse`
- It must be request/response agnostic. It doesn’t deal with the Request class, nor does it send a Response back. This responsibility is handled by the RestAPI handler.
- It can have other actions as a dependency.
- It must enforce business rules by throwing an Exception if anything prevent it from executing and/or returning the expected value, and leave the caller the responsability of how to render/respond to the exception.
- Each action must define in an distinct file, it's helpful to mock other dependencies in the unit test.
- The Action interface is define in package with name pattern `packageA-pub`. The real implementation of action is defined in `packageA` package.
- **must not** call `buildXXX` function inside an action. just import the type of Action in `buildXXX` function
- **must not** implement the Action in `class`
- **must** import other action by `type` only

## Core Concepts

1. **Action Interface**: An action is defined as a function interface that describes a specific operation.
2. **Immutability**: Actions should not modify their input parameters directly.
3. **Single Responsibility**: Each action should perform one specific task.

## Example code

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

// The closure to build CreateCourse
export function buildCreateCourse (initialCourse): CreateCourse {
    // Clo

    return (initialCourse: Course) => {
        // Implementation of CreateCourse function
    }
};
```

### 2. Action with Result

```typescript
export interface FetchCourseById {
    (courseId: string): Promise<Course>;
}

export function buildFetchCourseById() FetchCourseById {
    return async (courseId: string) {
        // Implementation of FetchCourseById
        return {}
    }
};
```

### 3. Action has other Actions as dependency

when CreateLesson depends on other action or need some parameter for implementation of the action, pass the dependencies into the `buildXXXX` function.

```typescript
// We **must** import type only
import type { NotifySystem } from './notifySystem'

// Define the action interface
export interface CreateLesson {
    (initialLesson: Lesson): Promise<void>;
}

// Implement the action. The first letter of name must be in lowercase.
export function buildCreateLesson(notifySystem: NotifySystem, dep2: Dep2): CreateLesson {
    return async (initialLesson) {
        // Use the action directly. Jest can mock `notifySystem`
        const result = await notifySystem('parameter1')

        // dep2 depends on result of notifySystem and the parameter `initialLesson`
        dep2(result, initialLesson)
    }
};
```

## Testing

Actions are easily testable due to their functional nature:

```typescript
describe('CreateCourse', () => {
    it('should create a new course', () => {
        const createCourse = buildCreateCourse()
        
        const course = { /* course data */ };
        const result = createCourse(course);
        expect(result).toBeDefined();
    });
});
```

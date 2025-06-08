# Action Pattern in TypeScript

The Action Pattern is a design pattern that encapsulates operations as objects. This pattern is particularly useful in TypeScript applications for managing business logic, domain operations, and state changes in a type-safe and maintainable way.

The properties of an action 
- It should have a name which is self-explanatory on what it does eg: CreateCourse, AddLessonToCourse, UpdateLesson. The name follow naming pattern `{Verb}{MainObject}{To}{TargetObject}`.
- It must be request/response agnostic. It doesn’t deal with the Request class, nor does it send a Response back. This responsibility is handled by the RestAPI handler.
- It can have other actions as a dependency.
- It must enforce business rules by throwing an Exception if anything prevent it from executing and/or returning the expected value, and leave the caller the responsability of how to render/respond to the exception.

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

// context interface if needed
export interface SomeActionBuilder {
    build(): SomeAction
}
```

## Examples

### 1. Simple Action

```typescript
// Define the action interface
export interface CreateCourse {
    (initialCourse: Course): void;
}

// Implement the action
const createCourse: CreateCourse = (initialCourse) => {
    // Implementation details
};
```

### 2. Action with Result

```typescript
interface FetchCourseById {
    (courseId: string): Promise<Course>;
}

const fetchCourseById: FetchCourseById = async (courseId) => {
    // Implementation details
    return course;
};
```

### 3. Action has other Actions as dependency

```typescript
// Define the action interface
export interface CreateCourse {
    (initialCourse: Course): void;
}

// Define the action interface
// export interface CreateCourseBuilder {
//     (
//         action: ActionA,        // This is the instance of other action
//         service: ServiceAPI     // This is the thirdparty API
//     ): CreateCourse;
// }

// const createCourseBuilder: CreateCourseBuilder = (action: ActionA, service: ServiceAPI ) => CreateCourse {
    
// }
```


## Best Practices

1. **Naming Conventions**
   - Use verb-noun combinations for action names
   - Be descriptive and specific
   - Example: `CreateCourse`, `UpdateUserProfile`, `FetchOrderDetails`

2. **Type Definition**
   - Define clear input and output types
   - Use TypeScript's built-in utility types when appropriate
   - Consider making immutable types using `readonly`

3. **Error Handling**
   - Use TypeScript's type system to handle errors
   - Consider returning Result types for complex operations
   ```typescript
   interface Result<T, E = Error> {
       success: boolean;
       data?: T;
       error?: E;
   }
   ```

4. **Documentation**
   - Document the purpose of each action
   - Include examples in documentation
   - Document any side effects

## Benefits

1. **Maintainability**: Actions are easy to test, modify, and maintain
2. **Reusability**: Actions can be composed and reused across the application
3. **Type Safety**: TypeScript provides compile-time type checking
4. **Separation of Concerns**: Business logic is separated from implementation details

## Common Use Cases

1. Domain Operations
2. API Calls
3. State Management
4. Event Handling
5. Business Logic Implementation

## Integration with Other Patterns

Actions can be combined with other patterns:
- Repository Pattern
- Command Pattern
- Observer Pattern
- Factory Pattern

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

This pattern is particularly useful in TypeScript applications where type safety and maintainability are priorities. It helps in creating clean, testable, and maintainable code while leveraging TypeScript's type system to prevent errors at compile time.
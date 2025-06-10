---
applyTo: "**/*.ts,**/*.tsx"
---

Apply the [general coding guidelines](./generalNamingConvention.md) to all code.

## TypeScript Guidelines
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- Don't add semicolon at the end of line
- When importing from other packages and files, try not to rename the symbols.

## Interface for "zod"
- Don't add "Schema" in the name.
- Add "z" as the prefix, e.g. `zCourse`
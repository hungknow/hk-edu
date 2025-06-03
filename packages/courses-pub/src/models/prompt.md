With the models described in the file [courses](../../../../docs/courses/course.md),
define all models in `models` folder.

- Each model is defined in a separate file. Only for the relevant models, used by their parent models, are define in the same file.
- The model fields is its own property. If one model containing other models as the children, the field should be the array of model ID.
- Update the `models/index.ts` file to export the new models defined in `models` directory.

- The naming convention follow the [file](../../../../docs/ai-instructions/typescriptNamingConvention.md)
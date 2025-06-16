### File structure

```
courses-interface
|- public               // Static assets to be served
|- app                  // App router
    |- layout.tsx        // Root layout is the top-most layout. Used to define the <html> and <body> tags and other  globally shared UI.
    |- page.tsx          // / - Main content of index homepage
    |- courses
        |- page.tsx       // /courses - The home page of courses
        |- create
            |- page.tsx     // /courses/create - Page to generate the new course
        |- lessons
            |- page.tsx     // /courses/lessons - Page to display all lessons of course          
            |- [lessonTitleUrl]   // /courses/lessons/[lessonTitleUrl]
                |- layout.tsx
                |- page.tsx     // Display content of lesson
|- components
    |- nav-sidebar.tsx
    |- 
|- hooks
|- lib                  // Contains functions, such as reusable utility functions and data fetching functions
|- packages             
    |- ui                // The core UI React components (e.g. button, card, table, form)
        |- src
        |- components
            |- button.tsx   // The core Button component
            |- tabs.tsx
            |- card.tsx
            |- breadcrumb.tsx
            |- badge.tsx
        |- hooks
        |- styles
            |- globals.css  // The CSS variables for `tailwindcss`
    |- courses-ui
        |- src
            |- components
                |- course-tree.tsx // CourseTree component. Used by nav-sidebar
                |- course-tree-item.tsx // CouseTreeItem component
                |- course-card.tsx // CourseCard component
            |- hooks

```

### Routing and File Structure

```typescript
export default async function Layout({
  params,
}: {
  params: Promise<{ team: string }>
}) {
  const { team } = await params
}
```

With the file path, map the value of URL to the variable of `params`.
```
File path                        | URL path      | Value    of `params`
app/courses/[courseID]/lessons/layout.tsx  | /courses/1/lessons  | Promise<{ courseID: '1' }>
app/shop/[tag]/[item]/layout.tsx | /shop/1/2	 | Promise<{ tag: '1', item: '2' }>
app/blog/[...slug]/layout.tsx    | /blog/1/2	 | Promise<{ slug: ['1', '2'] }>
```


### Rules
- Only components in `app` folder can import Nextjs library, they concern to use client or server components.
- All components in `packages` folder don't import Nextjs library, and they don't care it's client or server components
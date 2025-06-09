## CourseMenuTreeItem Component

A React component for a left-side navigation bar item, displaying title.
User can click to expand the list of lessons.

### Props

* `title: string`: Course title.
* `disabled: boolean`: If `true`, renders item greyed out; overrides status visual.
* `onClick?: () => void`: Callback when item is clicked.

### Display Logic


* **Title (`title`):**
    * Rendered as primary text.
    * **Truncation:** If `title` exceeds `max-width`, truncate with ellipsis (`...`).
    * **Tooltip:** On hover, if truncated, display full `title` in `Tooltip`.
    * **Alignment:** Left-aligned and vertically centered.

### Styling

Component adheres to:

* `min-width`: `150px`
* `padding-left`: `8px`
* `padding-right`: `8px`
* `padding-top`: `0px`
* `padding-bottom`: `0px`


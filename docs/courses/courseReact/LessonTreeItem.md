## LessonTreeItem Component

A React component for a left-side navigation bar item, displaying lesson progress and title.

### Props

* `title: string`: Lesson title.
* `status: 'default' | 'complete' | 'inProgress'`: Lesson progress status.
* `disabled: boolean`: If `true`, renders item greyed out; overrides status visual.
* `onClick?: () => void`: Callback when item is clicked.

### Display Logic

* **Appearance:** Determined by `status` and `disabled` props.
    * **Default:** No icon.
    * **Complete:** `complete` icon (e.g., checkmark) right of title.
    * **In Progress:** `in progress` icon (e.g., spinner) right of title.
    * **Disabled:** Text and icon greyed out, overrides `status`.

* **Title (`title`):**
    * Rendered as primary text.
    * **Truncation:** If `title` exceeds `max-width`, truncate with ellipsis (`...`).
    * **Tooltip:** On hover, if truncated, display full `title` in `Tooltip`.
    * **Alignment:** Left-aligned and vertically centered.

* **Icon Positioning:** Progress icons are right of title, right-aligned within component.

### Styling

Component adheres to:

* `min-width`: `150px`
* `max-width`: `300px`
* `padding-left`: `8px`
* `padding-right`: `8px`
* `padding-top`: `0px`
* `padding-bottom`: `0px`


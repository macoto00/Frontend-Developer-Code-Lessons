# CSS Topic 9 - Layouts: Grid

CSS Grid is a powerful tool for creating complex, two-dimensional layouts. 

**Understanding the Grid Container and Grid Items:**

- The grid container holds grid items.
- Activate Grid Layout using `display: grid;`.

```css
.container {
  display: grid;
}
```

**Defining Rows and Columns:**

- Use `grid-template-rows` and `grid-template-columns` to define the grid structure.
- Utilize measurement units like `fr`, `%`, `auto`, etc., for flexible sizing.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Example of defining columns */
  grid-template-rows: 100px auto; /* Example of defining rows */
}
```

**`grid-gap` and `gap`:**

- Create space between grid tracks or items.
- Use shorthand property `gap` for both row and column gaps.

```css
.container {
  display: grid;
  gap: 10px; /* Example of setting the gap between rows and columns */
}
```

**`grid-row` and `grid-column`:**

- Position grid items in specific rows and columns.
- Use shorthand `grid-area` for concise item placement.

```css
.item {
  grid-row: 1 / 3; /* Example of placing an item in rows 1 to 3 */
  grid-column: 2 / 4; /* Example of placing an item in columns 2 to 4 */
}
```

**`justify-items` and `align-items`:**

- Align grid items along the row and column axis.

```css
.container {
  display: grid;
  justify-items: center; /* Align items along the row axis */
  align-items: center; /* Align items along the column axis */
}
```

**Nested Grids:**

- Create grids within grid items for more complex layouts.

```css
.item {
  display: grid; /* Nested grid within a grid item */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
```

**`grid-area` and Naming Grid Areas:**

- Define named grid areas and place items within these areas.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}

.header {
  grid-area: header;
}
```

## Your Tasks

“The Grid. A digital frontier. I tried to picture clusters of information as they moved through the computer. What did they look like? Ships, motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see. And then, one day I got in...”
― Kevin Flynn

### Basic Grid

![basic](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/7362fbf5-4312-4beb-bf29-9128b5714e6c)

### Setting Grid Gaps

![gaps](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/d271a5c8-af28-47f5-b504-1b50090ff275)

### Placing Grid Items

![placing](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/7c615b37-1321-49dc-a379-45c5f53a5912)

### Justify and Align Items

![justify](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/5887bba8-5d11-465e-96cf-f5662ed267c5)

### Nested Grids

![nested](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/2bd7ee21-0abc-46eb-8f69-765d61d8c45f)

### Named Grid Areas 

![named](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/712f79ea-72e0-4e36-9d80-fffa1186f635)

### Ultra Grid 💪

![ultraOne](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/c9827ff6-b4e1-4d3b-a438-3949832c6b09)

### Ultra Grid Vol. 2  💪

![ultraTwo](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/7ee1e926-e6bc-400e-91f4-3b2e1fa5203e)

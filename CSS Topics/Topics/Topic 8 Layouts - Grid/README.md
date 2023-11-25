# CSS Topic 8 - Layouts: Grid

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

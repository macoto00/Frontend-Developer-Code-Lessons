# CSS Topic 8 - Layouts: Flexbox

**Flex Container `display: flex;`:** 

- Introduction to the parent container that holds flex items.
- Use of `display: flex;` to activate Flexbox.

```css
.container {
  display: flex;
}
```

**Flex Items:**

- Elements within the flex container that are arranged using Flexbox.
- Default behavior of flex items within a flex container.

**`flex-direction`:**

- Control the direction of the main axis.
- Options: `row`, `row-reverse`, `column`, `column-reverse`.

```css
.container {
  display: flex;
  flex-direction: row; /* or column, column-reverse, etc. */
}
```

**`justify-content`:**

- Align items along the main axis.
- Options: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.

```css
.container {
  display: flex;
  justify-content: center; /* or flex-start, flex-end, space-between, etc. */
}
```

**`align-items` and `align-self`:**

- Align items along the cross axis.
- Options: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

```css
.container {
  display: flex;
  align-items: center; /* or flex-start, flex-end, baseline, stretch, etc. */
}

.item {
  align-self: flex-end; /* or align-self: center, align-self: stretch, etc. */
}
```

**`flex-grow`, `flex-shrink`, and `flex-basis`:**

- Control how flex items grow, shrink, and their initial size.

```css
.item {
  flex: 1; /* shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0%; */
}
```

**`order`:**

- Change the order of flex items.

```css
.item:nth-child(2) {
  order: 1;
}
```

## Your Tasks

Mainly you will work witch this simple HTML:

```html
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

In some cases, you will need to apply more Attributes to achieve desired example.

img

### Basic Flex Container

img

### Flex Direction

img

img

### Justify Content

img

### Flex Grow, Shrink, Basis

img

### Align Self

img

### Changing Order

img

### Complex Flex Container 💪

img

### Nested Flexbox 💪

img

### Ultra Flexbox 💪💪

img
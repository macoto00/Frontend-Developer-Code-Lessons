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

![auto](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/73eea472-3033-4b10-9a9f-716e1dcb3065)

### Basic Flex Container

![flex](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/abf5a16f-163c-4a35-9ca0-ec4205574bc9)

### Flex Direction

![flexDirectionOne](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/5f89f25e-1a89-400a-9c3b-ea405fe8a97f)

### Justify Content

![justify](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/bc42b805-3ee6-428c-a186-983ed997edc8)

### Flex Grow, Shrink, Basis

![align](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/42c17e2a-e321-4f16-87c3-c70c32515b55)

### Align Self

![childAlign](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/9ff630df-28a8-4072-9660-d6827c83917d)

### Changing Order

![changingOrder](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/5275e1db-e2b7-4383-b5ec-cb841a1df690)

### Complex Flex Container 💪

![complex](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/e73010e6-c3fd-4d8a-9766-66e671df32d8)

### Nested Flexbox 💪

![nested](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/25525377-352e-4963-82ea-c986dcebd2e1)

### Ultra Flexbox 💪💪

![ultra](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/fc3c9d8f-53d8-4113-91a7-42c6786ff8c4)

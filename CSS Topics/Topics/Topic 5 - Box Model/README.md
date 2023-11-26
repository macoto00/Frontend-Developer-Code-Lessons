# CSS Topic 5 - Box Model

The CSS Box Model is the architectural blueprint governing the layout and design of every element on a webpage. It conceptualizes elements as boxes, encompassing four essential layers.

## Properties of the Box Model

`width` and `height`: Defines the width and height of the content area. This excludes padding, border, and margin.

**Setting Width and Height** Use width and height properties to adjust the size of the content area.

```css
p {
    width: 30px;
    height: 50 px;
}
```

`padding`: Adds space around the content within the border.

**Padding** Control padding with padding-top, padding-right, padding-bottom, and padding-left, or shorthand like padding.

```css
p {
    padding: 4em;
}
```

`border`: Defines the style, width, and color of the border.

**Borders** Set borders using border-width, border-style, border-color, or shorthand border.

```css
p {
    border: 1px solid black;
}
```

`margin`: Creates space between elements.

**Margins** Adjust margins using margin-top, margin-right, margin-bottom, margin-left, or shorthand margin.

```css
p {
    margin: auto;
}
```

## Your Turn

Time for practice!

### Example Box

```html
<!-- example box -->
<div class="box-example"></div>
```

img

### Example Box with padding

```html
<!-- example box with padding -->
<div class="box-example padding-example">Padding Example</div>
```

img

### Example Box with different border

```html
<!-- example box with different border -->
<div class="box-example border-example">Border Example</div>
```

img

### Example Box with margin

```html
<!-- example box with margin -->
<div class="box-example margin-example">Margin Example</div>
<div class="box-example margin-example">Margin Example</div>
```

img

### Example Box with combined styling

```html
<!-- example box with combined styling -->
<div class="box-example combined-example">Combined Example</div>
```

img

### More examples

```html
<!-- more examples -->
<div class="box-example inner-box1">Inner Box 1</div>
<div class="box-example inner-box2">Inner Box 2</div>
<div class="box-example inner-box3">Inner Box 3</div>
```
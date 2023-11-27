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

![boxExample](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/ebb511b4-079c-48da-8409-deb6bcb1e0b0)


### Example Box with padding

```html
<!-- example box with padding -->
<div class="box-example padding-example">Padding Example</div>
```

![padding](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/767bec09-7280-417a-999e-1bf6f1d80f52)

### Example Box with different border

```html
<!-- example box with different border -->
<div class="box-example border-example">Border Example</div>
```

![border](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/bad87583-9b08-4715-9388-f81324658cf4)


### Example Box with margin

```html
<!-- example box with margin -->
<div class="box-example margin-example">Margin Example</div>
<div class="box-example margin-example">Margin Example</div>
```

![margin](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/7a9ee650-47ef-4365-8263-e347ec6df7fb)

### Example Box with combined styling

```html
<!-- example box with combined styling -->
<div class="box-example combined-example">Combined Example</div>
```

![combined](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/1482446d-34f4-476c-b32f-cd2351e2f00a)


### More examples

```html
<!-- more examples -->
<div class="box-example inner-box1">Inner Box 1</div>
<div class="box-example inner-box2">Inner Box 2</div>
<div class="box-example inner-box3">Inner Box 3</div>
```

![more](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/58c48141-b3c3-491a-a1ff-c1bff2c260f0)

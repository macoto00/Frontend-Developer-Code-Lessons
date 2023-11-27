# CSS Topic 6 - Layouts: Floats and Positioning

## Floats

Floats are a CSS property used to shift elements to the left or right within their containing element, allowing other content to wrap around them.

`float: left;` aligns an element to the left within its container, allowing subsequent elements to flow around its right side.
`float: right;` positions an element to the right, allowing content to flow around its left side.

Floats were traditionally used for creating multi-column layouts before newer layout models like Flexbox and Grid. They're still useful for certain layout components or specific design requirements.

```css
/* Float an element to the left */
.float-left {
  float: left;
  /* Other styling properties */
}

/* Float an element to the right */
.float-right {
  float: right;
  /* Other styling properties */
}
```

## Positioning

Floats and positioning in CSS offer ways to manipulate the layout and position of elements. While their usage has decreased with the advent of newer layout models like Flexbox and CSS Grid, understanding these techniques remains valuable for specific design requirements and legacy browser support.

**Relative Positioning**

Relative positioning shifts an element's position from its default position without affecting the layout of other elements.

`position: relative;` allows adjusting an element's position relative to its default position.
`top`, `bottom`, `left`, `right` properties move the element in the specified direction from its original position.

Ideal for fine-tuning an element's placement without impacting the layout of surrounding elements. Often used in combination with absolute or fixed positioning for more complex layouts.

```css
.relative-pos {
  position: relative;
  top: 20px; /* Moves the element 20 pixels down from its default position */
  left: 10px; /* Moves the element 10 pixels to the right from its default position */
  /* Other styling properties */
}
```

**Absolute Positioning**

Absolute positioning places an element precisely relative to its closest positioned ancestor or the document's body.

Often used for creating overlays, tooltips, or elements that need precise positioning on a webpage.

`position: absolute;` takes the element out of the normal document flow and positions it relative to its closest positioned ancestor.
`top`, `bottom`, `left`, `right` properties determine the element's position from its relative ancestor.

```css
.absolute-pos {
  position: absolute;
  top: 50%; /* Positions the element 50% down from the top of its parent */
  left: 50%; /* Positions the element 50% from the left of its parent */
  transform: translate(-50%, -50%); /* Centers the element */
  /* Other styling properties */
}
```

## Your Turn

Time for some fun!

For your work, try to do a research for:

- **Never Ending Question** How to center a div

### Float Elements

```html
<div class="container">
    <div class="float-left">Float Left</div>
    <div class="float-right">Float Right</div>
    <div class="content">Other content wrapping around floated elements.</div>
    <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni veniam necessitatibus
        enim earum perspiciatis provident laborum porro quas a sint consequuntur ea excepturi sequi, quod eaque
        reprehenderit voluptas animi?</div>
</div>
```

![float](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/0933bd69-1588-4637-acb0-81e1121b4eae)

### Relative & Absolute Positioning

```html
<div class="relative-pos">Relative Positioning</div>

<br>

<div class="container">
    <div class="parent">
        <div class="child absolute-pos">Absolute Positioning</div>
    </div>
</div>
```

![relativeAbsolute](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/0cc2b735-5637-49ef-89ec-a5e07b459995)

### Mix of Float and Positioning

```html
<div class="container">
    <div class="float-left">Float Left</div>
    <div class="absolute-pos">Absolute Positioning</div>
    <div class="content">Other content wrapping around floated and positioned elements.</div>
</div>
```

![mix](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/cd7d1985-dd4e-475a-8fad-b70c9ef35a5d)

### Nested Positioned Elements

```html
<div class="container">
    <div class="parent relative-pos">
        <div class="child absolute-pos">Child 1</div>
        <div class="child absolute-pos-two">Child 2</div>
        <div class="child absolute-pos-three">Child 3</div>
    </div>
</div>
```

![nested](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/e4122f73-0f79-49fe-97de-c78d31a380cc)

### Complex Positioning with Overlays

```html
<div class="container">
    <div class="parent">
        <div class="overlay">Overlay Content</div>
    </div>
</div>
```

![complex](https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/ba7b5664-31af-4db1-81cb-4c0ad06b56ad)

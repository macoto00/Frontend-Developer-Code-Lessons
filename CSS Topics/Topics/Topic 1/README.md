# CSS Topic 1 - Basics

Here we go, we are going to make some styling, finally!

## Link CSS to HTML file

At first we need to create a files. In your folder create `index.html` and `style.css`.

Create a basic HTML file structure. Then link a CSS file to the HTML by adding 

```html
<link rel="stylesheet" href="style.css">
```

to the `<head>` tag. Just like that:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Basics</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

</body>

</html>
```

*POOF. You can now express yourself creatively.

## CSS Fundamentals

### Selectors 

These are patterns used to select the HTML elements you want to style. Selectors can target elements by their tag name, class, ID, attributes, etc.

**Tag Selectors** Styles all elements of a specific tag (e.g., p {} for paragraphs).

```css
p {}
```

**Class Selectors** Styles elements with a specific class (e.g., .highlight {} for elements with the class "highlight").

```css
.highlight {}
```

**ID Selectors** Styles a single element with a unique ID (e.g., #header-info {} for an element with the ID "header-info").

```css
#header-info {}
```

**Attribute Selectors** Styles elements based on their attributes (e.g., input[type="text"] {} for text input elements).

```css
input {}
```

**Pseudo-classes and Pseudo-elements** Select elements based on their state or position in the document (e.g., :hover, :first-child, ::before, ::after).

```css
button:hover {}
```

### Properties

CSS properties define the visual aspects of elements, such as color, size, font, margin, padding, and more.

**Font Properties** font-family, font-size, font-weight, font-style, etc.

```css
p {
    font-size: 1rem;
}
```

**Color Properties** color, background-color, border-color, etc.

```css
p {
    color: blue;
    color: #001122;
    color: #11236687;
    color: RGB (223, 234, 0);
}
```

**Box Model Properties** margin, padding, border, width, height, etc.

```css
p {
    margin: 1rem;
    border: 1px solid black;
}
```

**Layout Properties** display, position, float, flexbox, grid, etc.

```css
p {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**Text Properties** text-align, text-decoration, line-height, letter-spacing, etc.

```css
p {
    text-decoration: none;
}
```

### Values

Values are assigned to properties and determine the specific styling details. For instance, color: blue; sets the text color to blue.

### CSS Units

Understanding units is crucial for responsive and scalable designs.

**Absolute Units** px (pixels), pt (points), in (inches), etc.

```css
p {
    height: 40px;
}
```

**Relative Units** % (percentage), em, rem, vh, vw, etc.

```css
p {
    height: 60%;
}

div {
    font-size: 3rem;
}
```

## Box Model

The CSS Box Model is the architectural blueprint governing the layout and design of every element on a webpage. It conceptualizes elements as boxes, encompassing four essential layers.

### Properties of the Box Model

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

## Layouts: Floats and Positioning

### Floats

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

### Positioning

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

## Layouts: Flexbox

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


## Layouts: Grid



3. Layouts:
Floats and Positioning: Learn how to position elements using floats and absolute/relative positioning.
Flexbox: Master this layout model for one-dimensional layouts.
Grid: Understand and use CSS Grid for more complex, two-dimensional layouts.
4. Responsive Design:
Media Queries: Learn to create responsive designs for different screen sizes.
Viewport: Understand the viewport meta tag and its implications for responsive design.
5. Typography and Fonts:
Font Properties: Explore different font properties and how to style text effectively.
Google Fonts or Custom Fonts: Understand how to integrate and use different fonts.
6. CSS Preprocessors:
Learn about tools like SASS or LESS, which make CSS more maintainable and powerful.
7. Animations and Transitions:
Explore CSS animations and transitions to add interactivity and visual appeal to your websites.
8. Responsive Frameworks:
Familiarize yourself with frameworks like Bootstrap or Foundation to expedite responsive web development.
9. CSS Methodologies:
Learn about different methodologies like BEM, SMACSS, or OOCSS to write more maintainable and scalable CSS code.
10. CSS Architecture:
Understand how to organize and structure CSS files effectively in larger projects.
11. Browser Developer Tools:
Get familiar with browser tools to inspect and debug CSS code efficiently.
12. Practice, Practice, Practice:
Work on mini-projects, challenges, or clone simple websites to apply what you've learned.
13. Keep Learning:
Stay updated with new CSS features, best practices, and evolving standards through blogs, tutorials, and documentation.

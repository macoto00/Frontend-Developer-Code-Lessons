# CSS Topic 2 - Fundamentals

## Selectors 

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

## Properties

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

## Values

Values are assigned to properties and determine the specific styling details. For instance, color: blue; sets the text color to blue.

## CSS Units

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

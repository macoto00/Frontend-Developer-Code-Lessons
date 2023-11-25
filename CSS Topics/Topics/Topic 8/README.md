# CSS Topic 8 - Typography and Fonts

Fonts play a critical role in web design. They define the visual presentation of text content. 

## Key font properties

**Font Family**

- The `font-family` property specifies the typeface or font for text.
- Providing multiple font choices as fallbacks ensures better compatibility across devices and browsers.

```css
body {
  font-family: "Arial", sans-serif;
}
```

**Font Size and Units**

- The `font-size` property determines the size of the text.
- Different units (px, em, rem) provide flexibility in defining text size.

```css
h1 {
  font-size: 2rem;
}
``` 

**Font Weight and Style**

- `font-weight` adjusts the thickness of the font (normal, bold).
- `font-style` allows text to appear as italic or oblique.

```css
p {
  font-weight: bold;
  font-style: italic;
}
``` 

**Text Decoration**

- The `text-decoration` property adds visual effects to text, like underline, overline, or line-through.

```css
a {
  text-decoration: underline;
}
``` 

## Styling Text Effectively

Beyond font properties, styling text effectively involves various techniques.

**Line Height and Letter Spacing**

- `line-height` adjusts the vertical spacing between lines.
- `letter-spacing` controls the space between letters.

```css
p {
  line-height: 1.5;
  letter-spacing: 1px;
}
```

**Text Alignment and Indentation**

- `text-align` aligns text within its container (left, right, center, justify).
- `text-indent` creates an indentation at the beginning of a paragraph.

```css
p {
  text-align: justify;
  text-indent: 20px;
}
```

**Text Shadows and Text Transform**

- `text-shadow` adds a shadow behind text for visual effect.
- `text-transform` changes text case (uppercase, lowercase, capitalize).

```css
h1 {
  text-shadow: 2px 2px 4px #000;
  text-transform: uppercase;
}
```

## Google Fonts or Custom Fonts Integration 

Font integration provides versatility and uniqueness to web designs.

**Using Google Fonts**

- Google Fonts offers a wide array of free fonts for web use.
- Integration involves linking the font in the HTML file and applying it in CSS.

Link - https://fonts.google.com/

```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
```
```css
body {
  font-family: 'Open Sans', sans-serif;
}
```

Or you can import the font via CSS file. 

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
```

**Custom Fonts**:

- Custom fonts can be added via @font-face rule, allowing unique typography choices.

```css
@font-face {
  font-family: 'CustomFont';
  src: url('path/to/custom-font.woff2') format('woff2'),
       url('path/to/custom-font.woff') format('woff');
  /* Other font properties can be defined here */
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

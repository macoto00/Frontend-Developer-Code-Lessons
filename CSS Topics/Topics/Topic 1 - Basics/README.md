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

## Comments

In CSS, comments serve a similar purpose as in HTML: to add explanations, notes, or to temporarily disable parts of the code without affecting the rendering of the styles in the browser.

In CSS, comments can be created using two different methods:

### Single-line comments

To create a single-line comment in CSS, you can use /* */. Anything between /* and */ will be treated as a comment.

```css
/* This is a single-line comment */
body {
    font-family: Arial, sans-serif;
    /* color: #333; Uncomment this line to change text color */
}
```

The entire line or portion between `/*` and `*/` won't be interpreted as CSS code by the browser.

### Multi-line comments

CSS also supports multi-line comments, which are enclosed between /* and */ and can span multiple lines.

```css
/*
   This is a multi-line comment
   It can span several lines.
*/
```

These comments are beneficial for explaining complex CSS rules, providing context for selectors, and making notes for future updates or modifications in the code. Similar to HTML comments, CSS comments are ignored by the browser and won't affect the rendering of the webpage.

Remember to use comments to make your CSS code more understandable and maintainable, especially in larger projects or when working collaboratively with other developers.
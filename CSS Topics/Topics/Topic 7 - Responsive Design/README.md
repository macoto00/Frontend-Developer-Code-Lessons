# CSS Topic 7 - Responsive Design

See also - https://www.w3schools.com/html/html_responsive.asp

Responsive web design is about creating web pages that look good on all devices!

A responsive web design will automatically adjust for different screen sizes and viewports.

**Viewport Basics**

To create a responsive website, add the following `<meta>` tag to all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width=device-width` Sets the width of the viewport to the device's width.

`initial-scale=1.0` Sets the initial zoom level when the page is first loaded.

## Viewport

The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

```css
@media screen and (max-width: 768px) {
  /* Styles for screens up to 768px wide */
}
```

## Typical Breakpoints & Example

### Typical breakpoints:

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

### Example

```html
<div class="container">
    <h1>Responsive Design Example</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit sit amet justo eleifend lobortis.</p>
</div>
```

```css
/* Default styles */
.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
}

h1 {
    font-size: 32px;
}

p {
    font-size: 18px;
    line-height: 1.6;
}

.par-two {
    color: red;
}

.par-three {
    color: blue;
}

/* Responsive styles */
@media screen and (max-width: 768px) {

    /* Styles for screens up to 768px wide aka tablets */
    .container {
        width: 90%;
    }

    h1 {
        font-size: 28px;
    }

    p {
        font-size: 16px;
    }

    .par-three {
        display: none;
    }
}

@media screen and (max-width: 480px) {

    /* Styles for screens up to 480px wide aka phones */
    .container {
        width: 95%;
    }

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
    }

    .par-two {
        display: none;
    }
}
```

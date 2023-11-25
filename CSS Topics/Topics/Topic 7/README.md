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

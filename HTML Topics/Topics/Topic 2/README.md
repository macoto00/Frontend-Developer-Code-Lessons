# HTML Topic 2 - Basics

## Block 1: What is HTML?

HTML (Hypertext Markup Language) is the standard language used to create web pages. It provides the structure and content of a webpage, consisting of various elements that define the different parts of a document.

## Block 2: Basic HTML Structure

At first, we need to create an HTML file. Typically it's called `index.html`. 

It's a conventional name used for the main entry point or default page of a website within a directory. When a user navigates to a website's root URL (e.g., https://www.example.com/), the web server often looks for a file named "index.html" or a similar default index file (like index.htm, index.php, etc.) within that directory to serve as the initial page.

A typical HTML document has a basic structure:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
```

Where:
`<!DOCTYPE html>` Defines the document type as HTML5.
`<html>` The root element that wraps the entire HTML content.
`<head>` Contains meta-information about the document.
`<title>` Sets the title displayed in the browser's title bar.
`<body>` Contains the visible content of the webpage.

## Block 3: HTML Elements

HTML uses elements to structure content:

**Tags**: Enclosed in angle brackets (`<>`) to define elements, like `<p>` for paragraphs or `<h1>` for headings.

```html
<p>Hello, World!</p>
```

**Attributes**: Extra information within the opening tag that can modify an element's behavior or provide additional properties. For instance, the href attribute in specifies the URL for a hyperlink.

`id`: Specifies a unique identifier for an element within a document.

```html
<div id="uniqueId">...</div>
```

`class`: Assigns one or more class names to an element, allowing CSS and JavaScript to target multiple elements with the same class.

```html
<p class="highlighted">...</p>
```

`style`: Sets inline CSS styles for an element.

```html
<h1 style="color: red; font-size: 24px;">...</h1>
```

`href`: Used in <a> elements to specify the URL to link to.

```html
<a href="https://example.com">Link</a>
```

`src`: Specifies the URL of the resource to be used by elements like `<img>`, `<script>`, and `<iframe>`.

```html
<img src="image.jpg" alt="Image">
```

`alt`: Provides alternative text for elements like `<img>`. It's displayed if the image fails to load or for accessibility purposes.

```html
<img src="image.jpg" alt="Description of the image">
```

`title`: Adds a title or tooltip to an element that is displayed when the user hovers over it.

```html
<abbr title="Hypertext Markup Language">HTML</abbr>
```

`disabled`: Disables an input element or button.

```html
<button disabled>Disabled Button</button>
```

`target`: Used in <a> elements to specify where to open the linked document.

```html
<a href="https://example.com" target="_blank">Open in new tab</a>
```

`rel`: Specifies the relationship between the current document and the linked document for `<a>` elements.

```html
<a href="stylesheet.css" rel="stylesheet">...</a>
```

## Block 4: Common HTML Elements

`<h1>`, `<h2>`, `<h3>`, ... `<h6>`: Defines headings of varying sizes.

Example:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
```

`<p>`: Indicates a paragraph.

Example:

```html
<p>This is a paragraph.</p>
```

`<a>`: Creates a hyperlink to other web pages or resources.

Example:

```html
<a href="https://www.example.com">Visit Example</a>
```

`<img>`: Embeds an image in the HTML document.

Example:

```html
<img src="image.jpg" alt="Description of the image">
```

`<ul>`, `<ol>`, `<li>`: Creates unordered and ordered lists with list items.

Example:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

`<div>`: Defines a division or a section in an HTML document.

Example:

```html
<div>
  <p>Content inside a div</p>
</div>
```

`<span>`: Similar to `<div>`, but used for smaller inline sections.

Example:

```html
<p>This is <span>highlighted</span> text.</p>
```

## Block 5: Semantic HTML

Semantic HTML refers to using elements that convey meaning, aiding accessibility and SEO. Examples include `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`, and `<main>`.

## Block 6: HTML Forms

HTML forms facilitate user interaction:

```html
<form action="/submit" method="post">
    <input type="text" name="username" placeholder="Username"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <input type="submit" value="Submit">
</form>
```

`<form>` Wraps form elements and specifies where the data should be sent (action) and how (method).
`<input>` Creates input fields of different types like text, password, email, etc.
`<textarea>`, `<select>`, `<button>` Other form elements for larger text inputs, dropdowns, and buttons.

## Block 7: HTML5 Tables

HTML tables are a fundamental part of web development used to display data in rows and columns. They organize content in a structured format, making it easier for users to understand and navigate information.

### Basic Structure of an HTML Table

Tables are created using a combination of HTML elements: `<table>`, `<tr>`, `<th>`, and `<td>`.

`<table>`: Defines the start of the table.
`<tr>`: Stands for "table row" and is used to create rows in the table.
`<th>`: Represents table headers, typically placed within the `<tr>` element to define column headings.
`<td>`: Stands for "table data" and is used to create cells containing regular content.

### Creating a Simple Table

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
</table>
```

## Block 8: HTML5 Features

Introduce newer HTML5 features:

Audio and Video: `<audio>` and `<video>` tags for embedding media content.
Canvas and SVG: Elements for drawing graphics and creating scalable vector graphics.
Local Storage and Session Storage: localStorage and sessionStorage for storing data on the client-side.

## Block 9: Browser Developer Tools

Google Chrome - F12 or right click and inspect.

## Block 10: Resources and Further Learning

Recommend online resources, documentation, and practice exercises to continue learning and exploring HTML.


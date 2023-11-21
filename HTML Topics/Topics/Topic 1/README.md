# HTML Topic 1 - Basics

## What we learn? 

- Introduction to HTML
- Basic structure
- Tags, Elements, and Attributes
- Text Formatting and Structure
- Hyperlinks and Images
- Tables and Forms
- Semantic HTML
- Validation and Best Practices
- Resources and Further Learning
- Practice and Implementation

## Block 1: What is HTML?

HTML (Hypertext Markup Language) is the standard language used to create web pages. It provides the structure and content of a webpage, consisting of various elements that define the different parts of a document.

## Block 2: Basic HTML Structure

A typical HTML document has a basic structure:

```
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

**Tags**: Enclosed in angle brackets (<>) to define elements, like `<p>` for paragraphs or `<h1>` for headings.

```
<p>Hello, World!</p>
```

**Attributes**: Extra information within the opening tag that can modify an element's behavior or provide additional properties. For instance, the href attribute in specifies the URL for a hyperlink.

`id`: Specifies a unique identifier for an element within a document.

```
<div id="uniqueId">...</div>
```

`class`: Assigns one or more class names to an element, allowing CSS and JavaScript to target multiple elements with the same class.

```
<p class="highlighted">...</p>
```

`style`: Sets inline CSS styles for an element.

```
<h1 style="color: red; font-size: 24px;">...</h1>
```

`href`: Used in <a> elements to specify the URL to link to.

```
<a href="https://example.com">Link</a>
```

`src`: Specifies the URL of the resource to be used by elements like <img>, <script>, and <iframe>.

```
<img src="image.jpg" alt="Image">
```

`alt`: Provides alternative text for elements like <img>. It's displayed if the image fails to load or for accessibility purposes.

```
<img src="image.jpg" alt="Description of the image">
```

`title`: Adds a title or tooltip to an element that is displayed when the user hovers over it.

```
<abbr title="Hypertext Markup Language">HTML</abbr>
```

`disabled`: Disables an input element or button.

```
<button disabled>Disabled Button</button>
```

`target`: Used in <a> elements to specify where to open the linked document.

```
<a href="https://example.com" target="_blank">Open in new tab</a>
```

`rel`: Specifies the relationship between the current document and the linked document for <a> elements.

```
<a href="stylesheet.css" rel="stylesheet">...</a>
```

## Block 4: Common HTML Elements

`<h1>`, `<h2>`, `<h3>`, ... `<h6>`: Defines headings of varying sizes.

Example:

```
<h1>Main Heading</h1>
<h2>Subheading</h2>
```

`<p>`: Indicates a paragraph.

Example:

```
<p>This is a paragraph.</p>
```

`<a>`: Creates a hyperlink to other web pages or resources.

Example:

```
<a href="https://www.example.com">Visit Example</a>
```

`<img>`: Embeds an image in the HTML document.

Example:

```
<img src="image.jpg" alt="Description of the image">
```

`<ul>`, `<ol>`, `<li>`: Creates unordered and ordered lists with list items.

Example:

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

`<div>`: Defines a division or a section in an HTML document.

Example:

```
<div>
  <p>Content inside a div</p>
</div>
```

`<span>`: Similar to `<div>`, but used for smaller inline sections.

Example:

```
<p>This is <span>highlighted</span> text.</p>
```

## Block 5: Semantic HTML

Semantic HTML refers to using elements that convey meaning, aiding accessibility and SEO. Examples include `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`, and `<main>`.

## Block 6: HTML Forms

HTML forms facilitate user interaction:

```
html
Copy code
<form action="/submit" method="post">
    <input type="text" name="username" placeholder="Username"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <input type="submit" value="Submit">
</form>
```

`<form>` Wraps form elements and specifies where the data should be sent (action) and how (method).
`<input>` Creates input fields of different types like text, password, email, etc.
`<textarea>`, `<select>`, `<button>` Other form elements for larger text inputs, dropdowns, and buttons.

## Block 7: HTML5 Features

Introduce newer HTML5 features:

Audio and Video: `<audio>` and `<video>` tags for embedding media content.
Canvas and SVG: Elements for drawing graphics and creating scalable vector graphics.
Local Storage and Session Storage: localStorage and sessionStorage for storing data on the client-side.

## Block 8: Best Practices

Discuss best practices:

Indentation and Formatting: Maintain clean, readable code.
Accessibility: Use semantic elements for better accessibility.
Separation of Concerns: Keep HTML separate from CSS and JavaScript (use external files).

## Block 9: Browser Compatibility

Highlight the importance of testing and ensuring compatibility with different browsers to maintain consistent rendering and functionality.

## Block 10: Resources and Further Learning

Recommend online resources, documentation, and practice exercises to continue learning and exploring HTML.


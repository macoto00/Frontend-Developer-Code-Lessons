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

## 1. Introduction to HTML
Definition and Purpose: Understand what HTML is and its role in web development.
Versions and Evolution: Learn about HTML versions (HTML5 being the latest) and their advancements.

### Block 1: What is HTML?
HTML (Hypertext Markup Language) is the standard language used to create web pages. It provides the structure and content of a webpage, consisting of various elements that define the different parts of a document.

### Block 2: Basic HTML Structure
A typical HTML document has a basic structure:

```
html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>Title of the Page</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

Where:
`<!DOCTYPE html>` Defines the document type as HTML5.
`<html>` The root element that wraps the entire HTML content.
`<head>` Contains meta-information about the document.
`<title>` Sets the title displayed in the browser's title bar.
`<body>` Contains the visible content of the webpage.

### Block 3: HTML Elements
HTML uses elements to structure content:

**Tags**: Enclosed in angle brackets (<>) to define elements, like <p> for paragraphs or <h1> for headings.

```
<p>Hello, World!</p>
```

**Attributes**: Extra information within the opening tag that can modify an element's behavior or provide additional properties. For instance, the href attribute in specifies the URL for a hyperlink.

```
<a href="https://example.com">Link</a>
```

### Block 4: Common HTML Elements

<p> Defines a paragraph.
<h1> to <h6> Heading tags for different levels of headings.
<a> Creates hyperlinks.
<img> Embeds images.
<ul>, <ol>, <li> Creates unordered and ordered lists with list items.
<div> and <span> Divides content into blocks or inline elements for styling and layout purposes.

### Block 5: Semantic HTML
Semantic HTML refers to using elements that convey meaning, aiding accessibility and SEO. Examples include <header>, <footer>, <article>, <section>, <nav>, and <main>.

### Block 6: HTML Forms
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

<form>: Wraps form elements and specifies where the data should be sent (action) and how (method).
<input>: Creates input fields of different types like text, password, email, etc.
<textarea>, <select>, <button>: Other form elements for larger text inputs, dropdowns, and buttons.
### Block 7: HTML5 Features
Introduce newer HTML5 features:

Audio and Video: <audio> and <video> tags for embedding media content.
Canvas and SVG: Elements for drawing graphics and creating scalable vector graphics.
Local Storage and Session Storage: localStorage and sessionStorage for storing data on the client-side.
### Block 8: Best Practices
Discuss best practices:

Indentation and Formatting: Maintain clean, readable code.
Accessibility: Use semantic elements for better accessibility.
Separation of Concerns: Keep HTML separate from CSS and JavaScript (use external files).

### Block 9: Browser Compatibility
Highlight the importance of testing and ensuring compatibility with different browsers to maintain consistent rendering and functionality.

### Block 10: Resources and Further Learning
Recommend online resources, documentation, and practice exercises to continue learning and exploring HTML.

2. Basic Structure of an HTML Document
Document Structure: Understand the basic layout of an HTML document—<!DOCTYPE>, <html>, <head>, and <body>.
Headings: Learn about <h1> to <h6> tags and their usage for headings.

3. Tags, Elements, and Attributes
Tags: Explore common HTML tags such as <p>, <div>, <span>, <a>, <img>, <ul>, <ol>, <li>, etc.
Elements: Understand elements as combinations of opening and closing tags enclosing content.
Attributes: Learn about attributes like src, href, alt, id, class, etc., and how they modify elements.

4. Text Formatting and Structure
Formatting Tags: Explore <strong>, <em>, <u>, <br>, <hr>, <blockquote>, <pre>, etc.
Lists: Understand ordered (<ol>) and unordered (<ul>) lists and their structures using <li> tags.

5. Hyperlinks and Images
Links: Learn to create hyperlinks using the <a> tag and understand relative vs. absolute paths.
Images: Understand image inclusion using <img> tags and the attributes associated with them.

6. Tables and Forms
Tables: Learn to create tables using <table>, <tr>, <td>, and <th> tags to display data.
Forms: Understand form elements like <form>, <input>, <textarea>, <button>, and their attributes.

7. Semantic HTML
Semantic Elements: Explore the importance of semantic tags like <header>, <footer>, <nav>, <article>, <section>, etc., for better document structure and accessibility.

8. Validation and Best Practices
Validation: Learn about tools like W3C Markup Validation Service to validate HTML.
Best Practices: Understand coding conventions, indentation, comments, and accessibility considerations.

9. Responsive Design and Meta Tags
Viewport Meta Tag: Understand how the viewport meta tag affects the layout on different devices.
Responsive Design: Introduction to creating responsive web pages using media queries.

10. Resources and Further Learning
Online Resources: Explore websites, tutorials, and documentation for ongoing learning.
Projects: Start creating simple projects to apply your knowledge and reinforce learning.

11. Practice and Implementation
Hands-on Practice: Apply the concepts learned by building basic web pages and progressively more complex projects.
Code Exercises: Solve HTML-related coding exercises to reinforce understanding.

12. Review and Refinement
Review: Periodically review the concepts learned to ensure retention.
Refinement: Keep refining your HTML skills by exploring advanced topics and applying them to real-world scenarios.

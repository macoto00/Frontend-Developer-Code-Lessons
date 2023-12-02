# JS Topic 9 - Working with the DOM

Working with the DOM (Document Object Model) in JavaScript involves manipulating the structure, content, and styling of HTML documents dynamically. The DOM represents the document as a tree-like structure where each node represents an element, attribute, or text within the HTML.

## Accessing DOM Elements

### getElementById

Retrieves an element by its unique id attribute.

```js
let element = document.getElementById("myElement");
```

### querySelector

Selects the first element that matches a specified CSS selector.

```js
let element = document.querySelector(".className");
```

### querySelectorAll

Selects all elements that match a specified CSS selector.

```js
let elements = document.querySelectorAll("p");
```

## Modifying DOM Elements

### Changing Text Content VS Changing HTML Content

```js
element.textContent = "New text content";
element.innerHTML = "<b>New HTML content</b>";
```

### Changing CSS Styles

```js
element.style.color = "red";
element.style.fontSize = "16px";
```

### Manipulating Attributes

```js
element.setAttribute("id", "newId");
element.removeAttribute("class");
```

## Creating and Appending DOM Elements

### Creating Elements

```js
let newElement = document.createElement("div");
```

### Appending Elements

```js
parentElement.appendChild(newElement);
```

### Removing Elements

```js
parentElement.removeChild(childElement);
```

## Event Handling

### Adding Event Listeners:

```js
element.addEventListener("click", function() {
  // Event handling code
});
```

### Removing Event Listeners:

```js
element.removeEventListener("click", eventHandlerFunction);
```

## Complex Example 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h1 id="mainTitle">Click the Button!</h1>
    <div id="container"></div>
    <button id="btn">Click Me</button>
    
    <script src="script.js"></script>
</body>

</html>
```

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
}

#container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.square {
    width: 100px;
    height: 100px;
    background-color: #FFD700;
    margin: 0 10px;
    transition: transform 0.3s ease-in-out;
}

.square:hover {
    transform: scale(1.2);
}

button {
    padding: 10px 20px;
    margin: 3rem;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: #45a049;
}
```

```js
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("mainTitle");
    const container = document.getElementById("container");
    const button = document.getElementById("btn");

    button.addEventListener("click", function () {
        title.textContent = "Button Clicked!";
        createSquares();
    });

    function createSquares() {
        container.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
});
```

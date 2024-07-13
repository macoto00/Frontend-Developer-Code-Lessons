# Job Interview

Read this - https://www.macoto-dev.cz/dist/blog-pages/job-interview.html

Tell us about yourself. 

Why our company?

Do you have interest in ... ?

Tell us what you have learned recently?
 
Tell us about your last project?

- Some interviews are mostly theoretical
- Some interviews are mostly practical
- Some interviews are combinations of both
- Some interviews require accomplishing a practical task
- Some interviews require a practical example of solving the specified algorithm with an explanation

## HTML/CSS:

- What is the purpose of HTML and CSS in web development?

Answer: HTML (HyperText Markup Language) provides the structure and content of web pages, while CSS (Cascading Style Sheets) styles and designs this content, controlling its layout and appearance.

- Explain the difference between inline, block, and inline-block elements in HTML/CSS.

Answer: Inline elements (e.g., `<span>`, `<a>`) do not start on a new line and occupy only as much width as necessary. Block elements (e.g., `<div>`, `<p>`) start on a new line and take up the full width available. Inline-block elements (e.g., `<img>`, `<button>`) display as blocks while behaving as inline elements, allowing elements to sit side by side.

- How does CSS specificity work, and how is it calculated?

Answer: CSS specificity determines which CSS rule takes precedence when multiple rules target the same element. It's calculated based on the sum of values assigned to different selectors: IDs have the highest specificity, followed by classes, attributes, and elements.

- Explain the box model in CSS.

Answer: The CSS box model describes the space occupied by an element and consists of content, padding, border, and margin. It defines how these elements combine to form the total space an element takes on a page.

- What are semantic HTML tags, and why are they important?

Answer: Semantic HTML tags provide meaning to the content they surround, enhancing accessibility, SEO, and the structure of a webpage. Examples include `<header>`, `<footer>`, `<article>`, etc.

- Describe the difference between padding and margin in CSS.

Answer: Padding is the space between an element's content and its border, while margin is the space outside an element's border, creating space between elements.

- How can you vertically center an element using CSS?

Answer: Using Flexbox (align-items: center) or CSS Grid (place-items: center) for modern browsers. Alternatively, using the position property with values like absolute and transform or applying equal padding-top and padding-bottom.

- What are the differences between display: none and visibility: hidden in CSS?

Answer: display: none removes an element from the layout entirely, whereas visibility: hidden hides the element while keeping its position in the layout.

- Explain the differences between CSS Grid and Flexbox.

Answer: CSS Grid is a two-dimensional layout system, ideal for creating complex grid-based layouts, while Flexbox is a one-dimensional layout system, ideal for distributing space along a single axis.

- How can you make a website responsive using CSS?

Answer: Employing media queries (@media) to adjust styles based on screen sizes, using relative units like percentages and viewport units, and adopting flexible layout techniques like Flexbox and CSS Grid.

## JavaScript:

- What is JavaScript, and how does it differ from Java?

Answer: JavaScript is a scripting language used for web development, enabling interactive elements and dynamic content on web pages. It's different from Java in syntax, usage, and purpose.

- Explain the concept of event bubbling and event capturing in JavaScript.

Answer: Event bubbling is when an event is triggered on an innermost element and propagates upward through its ancestors. Event capturing involves capturing the event at the top of the DOM tree and propagating it down to the target element.

- How does hoisting work in JavaScript?

Answer: Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

- What is the difference between null and undefined in JavaScript?

Answer: null represents the intentional absence of any object value, while undefined represents the unintentional absence of a defined value.

- Explain the concept of closures in JavaScript.

Answer: Closures are functions within other functions that retain access to their outer function's scope even after the outer function has finished executing. They encapsulate data and functionality, maintaining their scope.

- What are the differences between let, const, and var in JavaScript?

Answer: `var` declares a variable with function scope (hoisted), and it can be redeclared and updated throughout the code. `let` declares a variable with block scope, allowing reassignment but not redeclaration in the same scope. `const` declares a constant variable with block scope that can't be reassigned or redeclared.

- Explain the difference between synchronous and asynchronous programming in JavaScript.

Answer: Synchronous programming executes code sequentially, while asynchronous programming allows tasks to be executed independently without waiting for the completion of other tasks.

- What is a callback function in JavaScript?

Answer: A callback function is a function passed as an argument to another function, which is then invoked or executed later when a particular event or condition occurs.

- How can you check the type of a variable in JavaScript?

Answer: Using the typeof operator, which returns a string indicating the type of the operand.

- Describe the difference between == and === operators in JavaScript.

Answer: == checks for equality after performing type coercion, while === checks for strict equality without type coercion, meaning both value and type must match for === to return true.

## Bootstrap:

- What is Bootstrap, and why is it used in web development?

Answer: Bootstrap is a front-end framework used for designing responsive and mobile-first websites quickly. It provides pre-designed templates, CSS classes, and JavaScript components for consistent styling and layout.

- Explain the grid system in Bootstrap.

Answer: Bootstrap's grid system is a layout system based on a 12-column grid. It allows developers to create responsive layouts by dividing the screen into rows and columns, providing flexibility in design across various screen sizes.

- How does Bootstrap handle responsiveness in web design?

Answer: Bootstrap utilizes a mobile-first approach, where CSS styles are designed for mobile devices by default and then adjusted for larger screens using media queries. This ensures a responsive layout across different devices.

- What are the advantages of using Bootstrap in web development?

Answer: Bootstrap offers advantages such as a consistent and responsive design, a wide range of pre-designed components (e.g., buttons, forms), ease of use, and compatibility with various browsers.

- Explain the concept of Bootstrap's responsive utility classes.

Answer: Bootstrap provides responsive utility classes (e.g., d-none, d-md-block) that can be applied directly to HTML elements to show or hide content based on different screen sizes without using custom CSS or media queries.

- Describe the differences between Bootstrap's grid system and Flexbox.

Answer: Bootstrap's grid system is based on a 12-column layout, providing more control over responsive designs. Flexbox is a layout model in CSS designed for one-dimensional layouts, offering more flexibility and control over complex layouts.

- What is the purpose of Bootstrap components like Modals, Carousels, and Dropdowns?

Answer: Bootstrap components like Modals provide pop-up dialogs, Carousels offer slideshow functionality, and Dropdowns create dropdown menus, providing pre-styled and functional UI elements for websites.

- How can you customize Bootstrap components and styles?

Answer: Bootstrap allows customization through its variables, which can be modified to change things like colors, spacing, and breakpoints. Custom CSS can also be used to override default Bootstrap styles.

- Explain the difference between Bootstrap's container and container-fluid classes.

Answer: The container class in Bootstrap creates a fixed-width container, while the container-fluid class creates a full-width (100% width) fluid container that spans the entire viewport width.

- What are the key differences between Bootstrap 3 and Bootstrap 4?

Answer: Bootstrap 4 introduced significant changes, including the switch to Flexbox, a different grid system, updated components, improved customization options with SASS, and enhanced responsiveness compared to Bootstrap 3.

## React/Angular:

- What is React/Angular, and what are its key features?

Answer (React): React is a JavaScript library for building user interfaces. Its key features include a component-based architecture, virtual DOM for performance, and a unidirectional data flow.

Answer (Angular): Angular is a TypeScript-based framework for building single-page applications. Its key features include a modular design, two-way data binding, and dependency injection.

- Explain the component lifecycle in React/Angular.

Answer (React): React components have lifecycle methods divided into three phases: Mounting, Updating, and Unmounting. Key methods include componentDidMount(), componentDidUpdate(), and componentWillUnmount().

Answer (Angular): Angular components have lifecycle hooks such as ngOnInit, ngOnChanges, ngAfterViewInit, and ngOnDestroy, triggered at different stages of a component's lifecycle.

- Describe the concept of data binding in Angular.

Answer: Data binding in Angular establishes a connection between the UI and the component's logic. There are four types: Interpolation ({{}}), Property binding ([property]), Event binding ((event)), and Two-way binding ([(ngModel)]).

- What are the differences between React Hooks and class components in React?

Answer: React Hooks are functions that let you use state and other React features in functional components, while class components use JavaScript classes to define components with state and lifecycle methods.

- Explain the Angular CLI and its advantages.

Answer: Angular CLI (Command Line Interface) is a powerful tool for initializing, developing, and maintaining Angular applications. Its advantages include scaffolding, built-in development server, code generation, and build optimization.

- What are services in Angular, and how are they used?

Answer: Services in Angular are singleton objects that carry out specific tasks independent of components. They are used to share data, perform common functionality, and keep code modular and reusable across components.

- Describe the concept of props in React and inputs/outputs in Angular.

Answer (React): Props are read-only data passed from parent to child components in React. They help to maintain unidirectional data flow and enable communication between components.

Answer (Angular): Inputs/outputs are mechanisms used for communication between parent and child components in Angular. Inputs allow a parent component to pass data to a child component, while outputs allow a child component to send data to its parent.

- How can you handle form validation in React/Angular?

Answer (React): In React, form validation can be handled using controlled components and libraries like Formik or by manually managing state and validating inputs.

Answer (Angular): Angular provides built-in form validation features using directives like ngModel, Validators, and FormBuilder to handle form validation declaratively in template-driven or reactive forms.

- Explain the concept of routing in React/Angular.

Answer (React): React Router is a library for handling routing in React applications. It enables navigation between different components while maintaining a single-page application experience.

Answer (Angular): Angular Router is a powerful module for handling navigation and routing in Angular applications. It helps in defining navigation paths and loading the corresponding components based on the URL.

- How do React/Angular handle state management in large applications?

Answer (React): In React, state management can be handled using built-in useState or third-party libraries like Redux or Context API for managing complex global states in larger applications.

Answer (Angular): Angular provides services, RxJS, and NgRx (an Angular-specific Redux-like library) for managing state in larger applications, facilitating a centralized approach to state management.

| How to center a div :)))

- Your portfolio showcase.
- Your questions

## How to prepare for interview?

- Must have is GitHub & LinkedIn profile.
- Big bonus is your own website, portfolio of products.
- Do Algorithmic exercises daily.
- Practice theoretical questions (use AI to generate the questions like "most common fronted interview questions").
- Complete the interviews. Every interview takes you further. Especially the ones that don't go in your favor.
- Practice soft skills. 
- Copy the Job Description to AI and let it generate a dummy Interview questions for you. 

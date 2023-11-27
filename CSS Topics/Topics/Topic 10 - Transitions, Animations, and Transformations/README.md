# CSS Topic 10 - Transitions, Animations, and Transformations

CSS Transitions, Animations, and Transformations are used to create visually appealing, engaging, and responsive user interfaces. They improve user experience, add polish to designs, and effectively communicate information, contributing to the overall success of a website or application.

## Transitions

Enhanced User Experience: Smooth transitions between states or property changes (like color, size, opacity) make interactions more intuitive and pleasant for users.

Visual Feedback: Transitions provide immediate visual feedback when elements change, guiding users' attention and indicating action or state changes.

Polish and Professionalism: Implementing transitions adds a level of polish to the design, making the interface feel more professional and refined.

Transition Property:

Description: CSS transitions enable smooth changes over a specified duration when a property value changes.
Usage: `transition: property duration timing-function delay;`
What it's good for: Creating smooth effects when a property value changes (e.g., color, size, opacity).

Example:

```css
button {
  transition: background-color 0.3s ease-in-out;
}
```

## Animations

Engaging User Attention: Animations attract and retain user attention, making interfaces more engaging and interactive.

Storytelling and Emphasis: They can be used to tell a story, emphasize important information, or guide users through a sequence of steps.

Enhanced User Interface: Animations can make complex interfaces more understandable by providing visual cues and guiding users' actions.

Keyframes:

Description: Keyframes define specific stages of an animation using percentages or named markers.
Usage:

```css
@keyframes <animation-name> {
  0% { /* styles */ }
  50% { /* styles */ }
  100% { /* styles */ }
}
```

What it's good for: Creating complex, multi-step animations with precise control.

Example:

```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
```

Animation Property:

Description: The animation property applies an animation to an element.
Usage: `animation: name duration timing-function delay iteration-count direction fill-mode;`
What it's good for: Applying defined keyframe animations to elements.

Example:

```css
div {
  animation: slide-in 1s ease-in-out infinite alternate;
}
```

## Transformations

Visual Effects: Transformations like scale, rotate, skew, and translate allow for visually appealing effects, adding depth and dynamism to the UI.

Responsive Design: They enable responsive design by allowing elements to adapt and respond to user interactions or different screen sizes.

Interactive Feedback: Transformations can provide immediate feedback to user actions, improving the overall interactivity and responsiveness of the website or application.

Scale:

Description: scale() resizes an element by a specified factor.
Usage: `transform: scale(x, y);`
What it's good for: Changing the size of elements, creating zoom effects.

Example:

```css
img:hover {
  transform: scale(1.2, 1.2);
}
```

Rotate:

Description: rotate() rotates an element by a specified angle.
Usage: `transform: rotate(angle);`
What it's good for: Rotating elements for visual effects or animations.

Example:

```css
.rotated {
  transform: rotate(45deg);
}
```

Translate:

Description: translate() moves an element along the X and Y axes.
Usage: `transform: translate(x, y);`
What it's good for: Repositioning elements within a layout or creating animations.

Example:

```css
.translated {
  transform: translate(20px, 10px);
}
```

Skew:

Description: skew() tilts an element along the X and Y axes.
Usage: `transform: skew(x-angle, y-angle);`
What it's good for: Creating diagonal or slanted elements.

Example:

```css
.skewed {
  transform: skew(20deg, 10deg);
}
```

## Your Tasks

“Transformations, roll out!”
― "Cascading Prime"

### Basic Transition

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/f8f500d3-9b91-496d-8d6a-2694f2435ccd

### Scale Transformation on Hover

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/5bf69f28-8199-43d8-97a9-b8f2ffad2a19

### Rotate Transformation on Hover

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/9b767c5c-dfbc-4076-a0a8-00d545c70c5f

### Translate Transformation on Hover

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/43d819d2-e0eb-4a30-88a4-30759afac5c2

### Skew Transformation on Hover

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/0ea3aeb6-7b14-44a9-a6c0-963060f9dca9

### Keyframe Animation

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/dddab6aa-4f02-49e2-ba78-4633837037a7

### Combining Transformations

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/5e20f9da-14a3-45bf-8f66-c67ef81f3184

### Multiple Transformations with Keyframes 💪

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/35af452b-8aec-45b8-aeda-88caf2d370ac

### Complex Example 💪💪

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/7bc21c68-2c3c-45f1-9ec6-39fb02eadc7f

### Solar System 💪💪💪

Just take a peek look at this monstrosity - https://codepen.io/juliangarnier/pen/krNqZO

Don't worry. We will have something far simple, yet a hard task. 

https://github.com/macoto00/Frontend-Developer-Code-Lessons/assets/117540231/c6982773-6a52-41f0-8a82-219fe6f04f4b

# CSS Topic 4 - Colors, Gradients, and Images

Colors, gradients, and images are essential tools in web design, used to enhance aesthetics, improve user experience, convey information, and create visually engaging and memorable websites.

## Colors

- **Visual Appeal**: Colors evoke emotions and set the tone for a website. They contribute to the overall aesthetic and help in creating a visually pleasing experience for users.

- **Branding and Recognition**: Consistent use of colors helps in brand recognition. Companies often have specific color palettes associated with their brand, aiding in brand identity and recall.

- **Readability and Accessibility**: Proper color choices enhance readability by ensuring good contrast between text and background, making the content more accessible to users with visual impairments.

Color Property:

Description: The color property sets the text color for an element.
Usage: `color: <color>;`
What it's good for: Customizing text color to enhance readability or aesthetics.

Example:

```css
p {
  color: blue;
}
```

Background-Color Property:

Description: The background-color property sets the background color of an element.
Usage: `background-color: <color>;`
What it's good for: Adding emphasis or highlighting elements by changing their background color.

Example:

```css
div {
  background-color: lightgreen;
}
```

Opacity Property:

Description: The opacity property adjusts the transparency of an element.
Usage: `opacity: <value>;` (where value ranges from 0 to 1)
What it's good for: Creating translucent elements for a layered or blended effect.

Example:

```css
.transparent {
  opacity: 0.5;
}
```

## Gradients

- **Depth and Dimension**: Gradients add depth and dimension to elements, making them visually interesting. They create smooth transitions between colors, giving a sense of depth or texture.

- **Visual Effects**: Gradients can be used to create various visual effects, from subtle shading to bold and vibrant designs. They provide flexibility in designing backgrounds, buttons, or overlays.

- **Modern Design Trends**: Gradients have seen a resurgence in modern web design trends, offering a fresh and contemporary look to interfaces.

Linear Gradients:

Description: Linear gradients create a gradual transition between two or more colors along a straight line.
Usage: `background-image: linear-gradient(direction, color-stop1, color-stop2, ...);`
What it's good for: Creating smooth transitions in backgrounds.

Example:

```css
.gradient-bg {
  background-image: linear-gradient(to right, #ffcccc, #ccffff);
}
```

Radial Gradients:

Description: Radial gradients create a transition radiating from a center point to the edges.
Usage: `background-image: radial-gradient(shape size at position, start-color, ..., last-color);`
What it's good for: Achieving circular or oval-shaped backgrounds.

Example:

```css
.radial-bg {
  background-image: radial-gradient(circle, #ff9966, #ff5e62);
}
```

## Images 

- **Visual Storytelling**: Images convey information quickly and effectively, aiding in storytelling or conveying complex ideas. They can evoke emotions and create a memorable user experience.

- **Enhanced Engagement**: Visual content tends to attract more attention and engagement from users compared to text-only content. Images can be used to draw attention to specific elements or features.

- **Varied Content Presentation**: Incorporating images allows for diverse content presentation. They can serve as backgrounds, illustrations, icons, or decorative elements, enriching the overall design.

Background Images:

Description: The background-image property sets one or multiple background images for an element.
Usage: `background-image: url('path/to/image.jpg');`
What it's good for: Adding images as backgrounds to elements.

Main difference between `html` element `<img>` and CSS property `background-image` is that `<img>` is best for displaying content images, while `background-image` is great for decorative or background visuals where more control over positioning and styling is required.

Example:

```css
.bg-image {
  background-image: url('image.jpg');
}
```

## AI Generated Images

Stable Difusion - https://stablediffusionweb.com/#ai-image-generator

Leonardo AI - https://app.leonardo.ai/

## Your Tasks

Google Fonts:

- Raleway
- EB Garamond 

For your work, try to do a research for:

- How To Create a Full Height Image

### Styling Header

```html
<!-- header section -->
<section>
    <h1><span>Vítejte</span> na mých stránkách</h1>
</section>
```

img

### Styling paragraphs

```html
<!-- paragraphs section -->
<section>
    <p class="red">Místo, kde se učí programovat.</p>
    <p class="blue">Pokud máte otázky, kontaktujte mě.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
        quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
        dolore explicabo excepturi?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
        quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
        dolore explicabo excepturi?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
        quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
        dolore explicabo excepturi?</p>
</section>
```

img

### Styling All Together

```html
<!-- info section -->
<section>
    <div class="info">
        <h1><span>Vítejte</span> na mých stránkách</h1>
        <p class="red">Místo, kde se učí programovat.</p>
        <p class="blue">Pokud máte otázky, kontaktujte mě.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
            quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
            dolore explicabo excepturi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
            quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
            dolore explicabo excepturi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
            quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
            dolore explicabo excepturi?</p>
    </div>
</section>
```

img

### Styling Differently

```html
<!-- about section -->
<section>
    <div class="about">
        <h1><span>Vítejte</span> na mých stránkách</h1>
        <h1 class="about-header"><span>Vítejte</span> na mých stránkách</h1>
        <p>Místo, kde se učí programovat.</p>
        <p>Pokud máte otázky, kontaktujte mě.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
            quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
            dolore explicabo excepturi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
            quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
            dolore explicabo excepturi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quidem quod dolorem cum, veritatis
            quasi minima vitae, reiciendis quas necessitatibus. Nemo consequuntur voluptatem nobis libero ex
            dolore explicabo excepturi?</p>
    </div>
</section>
```

img

### Backgrounds

```html
<!-- backgrounds -->
<section>
    <div class="bg-green"></div>
    <br>
    <div class="bg-blue"></div>
    <br>
    <div class="bg-gradient"></div>
    <br>
    <div class="bg-image"></div>
</section>
```

img
## Overview

## My process

First, I studied the design file to have a better understand of the structure of the page. This helped me a lot to see what components of the page (like CSS style) I could reuse. A technique of making squares and position them over the page was very helpful on this. Then, I started to translate the squares into div's on the HTML page. Finally, I studied the style and started to make the CSS file using mobile first
technique. Only the differences between the mobile version and the desktop version were put on the media tags area.

### Built with

- HTML 5
- CSS 3
- Figma to study the design

### What I learned

I learned a little bit on how to have a better perspective of the structure of the page. The square technique gave me a new method to struture them. Moreover, I understood better the concept of CSS reusability of classes. I created a class named "category" which was reused three times on the page.

Here the HTML code which uses it and the CSS class.

```html
<div class="category primary">
  <div class="category-content">
    <div class="image">
      <img src="images/icon-sedans.svg" type="images/svg" alt="Sedans" />
    </div>
    <div class="content-text">
      <div class="title">
        <p class="title">SEDANS</p>
      </div>
      <div class="paragraph">
        <p class="paragraph">
          Choose a sedan for its affordability and excellent fuel economy.
          Ideal for cruising in the city or on your next road trip.
        </p>
      </div>
      <div class="more">
        <a class="primary" href="#">Learn More</a>
      </div>
    </div>
  </div>
</div>

<div class="category secondary">
  ...
</div>

<div class="category third">
  ...
</div>
```


```css
.content .container .category {
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 46px;
  padding-bottom: 47px;
}
```

### Continued development

I'll continue the Front end development studies since I have a huge difficult to
make friendly and beautiful interfaces. On the next exercise I'll try to use some Javascript code and some other forms like circles and elipses.
# My website, but Uncompiled

This project was made with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies
+ **axios** - Used for getting Galleys
+ **bootstrap** - Used for responsive styling
+ **node-sass** - Used to compile SASS
+ **react** - ReactJS
+ **react-bootstrap** - Used for responsive styling
+ **react-dom** - ReactJS
+ **react-particles-js** - Used in footer
+ **react-reveal** - Used in Home Sections as nice animations
+ **react-router-dom** - Used for links and routing
+ **react-scripts** - ReactJS
+ **rss-parser** - Used for getting Galleys

## File Structure
```
schneiderei-react
+-- public
    (This contains favico, etc)
+-- src
    +-- assets
        (Various assets and images)
    +-- components
        +-- pages
            (All pages as react components)
        (Any reused components)
    App.js (Main app)
    Index.js
    index.scss (Main styling)
    theme.scss (Bootstrap styling)
```

## Pages
Page components in `/src/components/pages`

+ **Home** from `Home.js` at `/`
+ **Games** from `Games.js` at `/games`
+ **Websites** from `Websites.js` at `/websiteses`
+ **Art** from `Art.js` at `/art`
+ **Furry** from `Furry.js` at **unused** - Page may get implemented/finished in the future
+ **About** from `About.js` at `/about`

## Components
Components are in `/src/components/`

### Gallery
```html
<Gallery gallery_owner="DeviantArtLinkUserName" />
```
**Props**
+ gallery_owner - User name in DeviantArt Galley Link

### PostBlock
```html
<PostBlock post={post} toggleImagesStat={this.state.images} />
```
Made to be used by the `Gallery` component.

### HomeSection
```html
<HomeSection href="/link" title="Section Title" image={require(Section_Image.png)}>
Text
</HomeSection>
```
**Props**
+ href - The react-router-dom link that will be used when the component is clicked.
+ title - Title shown in the component
+ image - Image shown in the component

### Title
```html
<Title>Title Text</Title>
```
Just a template for a title row. It created the following:
```html
<Row className="headerRow mb-3">
    <Col>
        <h1>{props.children}</h1>
    </Col>
</Row>
```

### Character - **Current unused**
```html
<Character name="Name" image="Image" notes={
{
    "ul": "list items",
    "Listed": "Here"
}} sections={[
    "Just an array of strings",
    "That creates sepperated sections"
]} />
```
# Archived version of the never quite finished of the v2 of my page
# My website, but Uncompiled

This project was made with [Create React App](https://github.com/facebook/create-react-app).

## Pages
Page components in `/src/components/pages`

+ **Home** from `Home.js` at `/`
+ **Games** from `Games.js` at `/games`
+ **Websites** from `Websites.js` at `/websiteses`
+ **Art** from `Art.js` at `/art`
+ **Furry** from `Furry.js` at **unused** - Page may get implemented/finished in the future
+ **About** from `About.js` at `/about`

## Components

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
## NavBar
```html
<NavBar />
```
Just the NavBar.
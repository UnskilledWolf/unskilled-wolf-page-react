import React, { Component } from 'react'
import PostBlock from './PostBlock';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns'

//RRS Parser setup
let Parser = require('rss-parser');
let parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
// const GALERY_OWNER = 'hexagonal192';
// const GALERY_OWNER = 'pandapaco';
// const DA_GET = `https://backend.deviantart.com/rss.xml?type=deviation&q=by%3A${GALERY_OWNER}+sort%3Atime+meta%3Aall`;

export default class Gallery extends Component
{
    state = {
        galery: [],
        images: false
    }

    componentDidMount()
    {
        parser.parseURL(CORS_PROXY + `https://backend.deviantart.com/rss.xml?type=deviation&q=by%3A${this.props.gallery_owner}+sort%3Atime+meta%3Aall`, (err, feed) =>
        {
            console.log("Got " + feed.title);
            this.setState({ galery: feed.items });
        });
    }

    toggleImages = (e) =>
    {
        console.log(e);
        this.refs.button.disabled = true;
        console.log("Toggled Images");
        this.setState({ images: true });
    }

    render()
    {
        return (
            <div className="gallery mt-3">
                <div className="mb-3 justify-content-center text-center">
                    <Button variant="warning" onClick={this.toggleImages} ref="button">Load Images</Button>
                </div>
                <div className="container">
                    <CardColumns>
                        {this.state.galery.map((post) => (
                            <PostBlock key={post.title} post={post} toggleImagesStat={this.state.images} />
                        ))}
                    </CardColumns>
                </div>
            </div >
        )
    }
}

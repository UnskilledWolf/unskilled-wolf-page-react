import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

//*Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LENGHT = 65;
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

class PostBlock extends Component
{
    state = {
        image: ''
    }

    // componentDidMount()
    // {
    //     const { link } = this.props.post;

    //     let DA_GET = 'https://backend.deviantart.com/oembed?url=' + link;
    //     axios.get(CORS_PROXY + DA_GET).then(res => this.setState({ image: res.data.thumbnail_url }));
    // }

    componentDidUpdate()
    {
        if (this.props.toggleImagesStat)
        {
            const { link } = this.props.post;

            let DA_GET = 'https://backend.deviantart.com/oembed?url=' + link;
            axios.get(CORS_PROXY + DA_GET).then(res => this.setState({ image: res.data.thumbnail_url }));
        }
    }

    getImage = () =>
    {
        if (this.state.image === '')
        {
            return require('../assets/ImagePlaceholder.png')
        }
        else
        {
            return this.state.image
        }
    }

    render()
    {
        const { title, content, link } = this.props.post;

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.getImage()} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content.substring(0, LENGHT)}<span className="trailing">...</span></Card.Text>
                    <a href={link}><Button variant="primary">Open on DA</Button></a>
                </Card.Body>
            </Card>
        )
    }
}

PostBlock.propTypes = {
    posts: PropTypes.object.isRequired,
    key: PropTypes.string,
    toggleImagesStat: PropTypes.bool.isRequired
}

export default PostBlock;

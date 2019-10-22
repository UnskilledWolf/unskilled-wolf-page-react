import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Gallery from '../Gallery';
// import { Link } from 'react-router-dom';

export default function Art()
{
    return (
        <Container>
            <Title>Art</Title>
            <Row className="text-center">
                <Col>
                    <h5>You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a></h5>
                    <p>I mainly draw furry characters, but I also create some vector and pixel art, and I am slowly starting to draw terrain.</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <h3>DeviantArt Gallery</h3>
                    <Gallery gallery_owner="hexagonal192" />
                    <sub>Images loaded from DeviantArt RRS API and oEmbed API. <br />This may take a second</sub>
                </Col>
            </Row>
        </Container >
    )
}

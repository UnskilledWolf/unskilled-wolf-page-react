import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Gallery from '../Gallery';

export default function Art()
{
    return (
        <Container>
            <Title>Art</Title>
            <Row className="text-center">
                <Col>
                    <h5>You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a></h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Gallery gallery_owner="hexagonal192" />
                    <sub>Images loaded from DeviantArt RRS API and oEmbed API</sub>
                </Col>
            </Row>
        </Container>
    )
}

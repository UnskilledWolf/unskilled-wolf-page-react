import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Art()
{
    return (
        <Container>
            <Row className="headerRow mb-3 rounded">
                <Col>
                    <h1>Art</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <p>You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>TODO: Create thing</p>
                </Col>
            </Row>
        </Container>
    )
}

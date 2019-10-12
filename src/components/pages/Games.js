import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Games()
{
    return (
        <Container>
            <Row className="headerRow mb-3 rounded">
                <Col>
                    <h1>Games</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>I do create games, but most of the are old and bad. There will me new ones someting soon though.</p>
                </Col>
            </Row>
        </Container>
    )
}

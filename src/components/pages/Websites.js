import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Websites()
{
    return (
        <Container>
            <Row className="headerRow mb-3 rounded">
                <Col>
                    <h1>Websites</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        I create websites. I use ReactJS to create them, but I used to use regular HTML, CSS, and JS before.<br />
                        I obvioudly created this website myself.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

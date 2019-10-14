import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Characters()
{
    return (
        <Container>
            <Title>Characters</Title>
            <Row>
                <Col>
                    <p>I am a furry, and like many others, I enjoy to create characters (or OCs).</p>
                </Col>
            </Row>
            <Row>
                <h2 className="linedTitle">Axiom</h2>
                <Col>
                    <Image src="https://via.placeholder.com/450x300" />
                </Col>
                <Col>
                    This is where text would be!
                </Col>
            </Row>
        </Container>
    )
}

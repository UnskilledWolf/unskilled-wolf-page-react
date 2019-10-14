import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Image from 'react-bootstrap/Image';

export default function Games()
{
    return (
        <Container>
            <Title>Games</Title>
            <Row>
                <Col>
                    <p>I do create games, but most of the are old and not to my standarts. There will me new ones someting soon though.</p>
                    <p>I prefer to use Unity3D to create my games, but I have also created some small thing in Processing, and just some plain text things in some other languages.</p>
                </Col>
                <Col className="justify-content-center text-center">
                    <Image src={require("../../assets/games.png")} />
                </Col>
            </Row>
        </Container>
    )
}

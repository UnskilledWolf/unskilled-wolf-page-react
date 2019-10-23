import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
// import Image from 'react-bootstrap/Image';

export default function Games()
{
    return (
        <Container>
            <Title>Games</Title>
            <Row>
                <Col>
                    <p>I do create games, but most of them are old and not reflect my current skill level. I will work on creating new games sometime soon though.</p>
                    <p>I prefer to use Unity3D to create my games, but I have also created some small things in Processing, and just some terminal text things in some other languages.</p>
                </Col>
                <Col className="justify-content-center text-center">
                    {/* <Image src={require("../../assets/games.svg")} /> */}
                    <div className="gradiant-fade" style={{ MaskImage: `url(${require('../../assets/games.svg')})`, webkitMaskImage: `url(${require('../../assets/games.svg')})` }} />
                </Col>
            </Row>
        </Container >
    )
}

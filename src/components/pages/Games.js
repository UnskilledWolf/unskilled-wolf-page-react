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
                    <p>I used to create games, but most of them are old and do not reflect my current skill and knowledge. I want to work on something in the futuire, but my most current work comes from my websites.</p>
                    <p>To create games, I used Unity3D, but I have now switched to Godot. I also made some small things in Processing and P5.</p>
                    <p>I also have some <b>OLD</b> games on <a href="https://ldjam.com/users/gerox">Ludum Dare</a> (As I said, Old and Simple Games)</p>
                </Col>
                <Col className="justify-content-center text-center">
                    {/* <Image src={require("../../assets/games.svg")} /> */}
                    <div className="gradiant-fade" style={{ MaskImage: `url(${require('../../assets/games.svg')})`, webkitMaskImage: `url(${require('../../assets/games.svg')})` }} />
                    {/* <div className="gradiant-fade" /> */}
                </Col>
            </Row>
        </Container >
    )
}

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
// import Image from 'react-bootstrap/Image';

export default function Websites()
{
    return (
        <Container>
            <Title>Websites</Title>
            <Row>
                <Col>
                    <p>
                        I create websites. I use ReactJS for the front end and NodeJS + Express for the backend. I also have used Vue and Angular before, but I don't know as much about them.<br />
                        I obviously created this website myself.
                    </p>
                </Col>
                <Col className="justify-content-center text-center">
                    {/* <Image src={require("../../assets/sites.svg")} /> */}
                    <div className="gradiant-fade" style={{ MaskImage: `url(${require('../../assets/sites.svg')})`, webkitMaskImage: `url(${require('../../assets/sites.svg')})` }} />
                </Col>
            </Row>
        </Container>
    )
}

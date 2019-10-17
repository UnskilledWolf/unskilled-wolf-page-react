import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Image from 'react-bootstrap/Image';

export default function Websites()
{
    return (
        <Container>
            <Title>Websites</Title>
            <Row>
                <Col>
                    <p>
                        I create websites. I currently use ReactJS to create them, but I can also make sutes using only regular HTML, CSS, and JS. I also know how do create basci APIs in nodeJS, and a bit about databases.<br />
                        I obvioudly created this website myself.
                    </p>
                </Col>
                <Col className="justify-content-center text-center">
                    <Image src={require("../../assets/sites.png")} />
                </Col>
            </Row>
        </Container>
    )
}

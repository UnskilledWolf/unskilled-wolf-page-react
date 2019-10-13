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
                        I create websites. I use ReactJS to create them, but I used to use regular HTML, CSS, and JS before. I also know how do create basci APIs in node, and access databases.<br />
                        I obvioudly created this website myself.
                    </p>
                </Col>
                <Col className="justify-content-center text-center">
                    <Image src="https://via.placeholder.com/450" />
                </Col>
            </Row>
        </Container>
    )
}

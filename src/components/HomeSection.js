import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default function HomeSection(props)
{
    // const IMAGE_STYLE = {
    //     backgroundImage: `url(${props.image})`
    // }
    return (
        <Fade left>
            <Link to={props.href} style={{ textDecoration: 'none' }}>
                <Row className="homeSection rounded mb-3">
                    <div className="homeGradient" />
                    <Col>
                        <h4>{props.title}</h4>
                        <p>{props.children}</p>
                    </Col>
                    <Col className="justify-content-center text-center">
                        <Image rounded src={props.image} className="sectionImage" />
                    </Col>
                </Row>
            </Link>
        </Fade>
    )
}

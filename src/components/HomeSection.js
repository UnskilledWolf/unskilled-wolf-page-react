import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

export default function HomeSection(props)
{
    const IMAGE_STYLE = {
        backgroundImage: `url(${props.image})`
    }
    return (
        <Link to={props.href} style={{ textDecoration: 'none' }}>
            <Row className="homeSection rounded mb-3">
                <div className="homeGradient" />
                <Col>
                    <h4>{props.title}</h4>
                    <p>{props.children}</p>
                </Col>
                <Col>
                    <div className="paralaxImage rounded" style={IMAGE_STYLE}></div>
                </Col>
            </Row>
        </Link>
    )
}

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Fade from './Fade';

export default class HomeSection extends React.Component
{
    // const IMAGE_STYLE = {
    //     backgroundImage: `url(${props.image})`
    // }
    state = {
        animateImage: ""
    }

    activetAnimation = () =>
    {
        this.setState({ animateImage: "fade-image-animate" });
    }

    render()
    {
        return (
            <Fade onReveal={this.activetAnimation}>
                <Link to={this.props.href} style={{ textDecoration: 'none' }}>
                    <Col className="homeSection rounded mb-3">
                        <Row>
                            <Col>
                                <h4>{this.props.title}</h4>
                                <p>{this.props.children}</p>
                            </Col>
                            <Col className={`justify-content-center text-center fade-image ${this.state.animateImage}`}>
                                <Image rounded src={this.props.image} className="sectionImage" />
                            </Col>
                        </Row>
                    </Col>
                </Link>
            </Fade>
        )
    }
}

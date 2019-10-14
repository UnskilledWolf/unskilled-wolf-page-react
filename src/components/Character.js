import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade'

export default function Character(props)
{
    return (
        <Row className="mb-5">
            <Container>
                <Row className="ml-1">
                    <h2 className="linedTitle">{props.name}</h2>
                </Row>
                <Row>
                    <Col md="auto">
                        <Fade left>
                            <Image src={props.image} />
                        </Fade>
                    </Col>
                    <Col className="ml-1">
                        <Row>
                            <p>
                                {Object.keys(props.notes).map((element, index) => (
                                    <React.Fragment key={index}>{element}: {props.notes[element]}<br /></React.Fragment>
                                ))}
                            </p>
                        </Row>
                        {props.sections.map((element, index) => (

                            <Row className="section" key={index}><p>
                                {element}
                            </p></Row>)
                        )}
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    notes: PropTypes.object.isRequired,
    sections: PropTypes.array.isRequired
}
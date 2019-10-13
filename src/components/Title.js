import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Title(props)
{
    return (
        <Row className="headerRow mb-3">
            <Col>
                <h1>{props.children}</h1>
            </Col>
        </Row>
    )
}

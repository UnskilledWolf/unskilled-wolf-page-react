import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Container from 'react-bootstrap/Container';
import Character from '../Character';

export default function Characters()
{
    return (
        <Container>
            <Title>Characters</Title>
            <Row>
                <Col>
                    <p>I am a furry, and like many others, I enjoy to create characters (or OCs).</p>
                </Col>
            </Row>
            <Character name="Axiom" image="https://via.placeholder.com/300x450" notes={
                {
                    "Alt": "Hexanon",
                    "Species": "Undefined Wolf",
                    "Role": "Fursona"
                }} sections={[
                    "Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.",
                    "Lorem Lorem, whatever whatever, ipsum, ipsum"
                ]} />
            <Character name="Basalt" image="https://via.placeholder.com/300x450" notes={
                {
                    "Species": "Protogen",
                    "Role": "OC"
                }} sections={[
                    "Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.",
                    "Lorem Lorem, whatever whatever, ipsum, ipsum"
                ]} />
            <Character name="Lithium" image="https://via.placeholder.com/300x450" notes={
                {
                    "Species": "Fox",
                    "Role": "OC"
                }} sections={[
                    "Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.Here is another paragraph! This one is a bit longer.",
                    "Lorem Lorem, whatever whatever, ipsum, ipsum"
                ]} />
        </Container>
    )
}

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import Container from 'react-bootstrap/Container';
import Character from '../Character';

export default function Characters()
{
    return (
        <React.Fragment>
            <Container className="mb-5">
                <Title>Furry</Title>
                <Row>
                    <Col>
                        <p>I am a furry, thus the Wolf part of my name. I am working on a Fursuit and a 3d Model of my Fursona.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Title>Characters</Title>
                <Row>
                    <Col>
                        <p>I enjoy creating characters (or OCs), these are summaries of my main ones.</p>
                    </Col>
                </Row>
                <Character name="Axiom" image="https://via.placeholder.com/300x450" notes={
                    {
                        "Species": "Undefined Wolf",
                        "Role": "Fursona"
                    }} sections={[
                        "He is an undefined, in the form of a wolf. The undefined are basically a rare magical species, that are born as a modified version of some other species, but with abilities specific to them, like full control of their body, high intelligence, and a large potential for magical abilities.",
                        "Axiom doesn't have a gender or reproductive system, he is still male though.",
                        "Axiom is able to use a magic, which created changes in reality. This, however is limited to how much energy he as stored.",
                        "Axiom lives on an advanced solar system with multiple unique inhabited planets.",
                        "His necklace stores backup energy and slightly amplified his power, although it is not necessary."
                    ]} />
                <Character name="Basalt" image="https://via.placeholder.com/300x450" notes={
                    {
                        "Species": "Protogen",
                        "Role": "OC"
                    }} sections={[
                        "Basalt is a Protogen, that was saved from a spaceship crash by Axiom.",
                        "He has similar powers to Axiom, although slightly weaker."
                    ]} />
                <Character name="Lithium" image="https://via.placeholder.com/300x450" notes={
                    {
                        "Species": "Fox",
                        "Role": "OC"
                    }} sections={[
                        "Lithium lives on a different planet to Axiom.",
                        "He is mostly a regular fox."
                    ]} />
                <Row>
                    <Col>
                        <p>
                            This is the summarized information, <s>for the full thing, go <a href="https://docs.google.com">Here</a></s> the full information will be available when it's finished.
                        </p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

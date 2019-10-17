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
                        <p>I enjoy creating characters (or OCs), while I have created a few, these are the most developed. My fursona is Axiom</p>
                    </Col>
                </Row>
                <Character name="Axiom" image="https://via.placeholder.com/300x450" notes={
                    {
                        "Alt": "Hexanon",
                        "Species": "Undefined Wolf",
                        "Role": "Fursona"
                    }} sections={[
                        "He is an undefined, in the form of a wolf. The undefined are basically a rare magical species, that are born as a modified version of some other species, but with their abilities, like full controll of therir body, high interligence, and a large potential for magical abilitkes.",
                        "Axiom doesn't have a gender or reproductyve system, he is still male though.",
                        "Axiom is able to use a magic, which created changes in reality.",
                        "Axiom lives on a advanced solar system with multiple unique inhabited planets.",
                        "His necklace stores and slightly amplifyeds his power."
                    ]} />
                <Character name="Basalt" image="https://via.placeholder.com/300x450" notes={
                    {
                        "Species": "Protogen",
                        "Role": "OC"
                    }} sections={[
                        "Basalt is a Protogen, that was saved from a crash by Axiom",
                        "He has similar powers to Axiom"
                    ]} />
                <Character name="Lithium" image="https://via.placeholder.com/300x450" notes={
                    {
                        "Species": "Fox",
                        "Role": "OC"
                    }} sections={[
                        "Lithim lives on a different planet to Aximom.",
                        "He is mostly a normal gamer fox."
                    ]} />
                <Row>
                    <Col>
                        <p>
                            This is the summarized information, for the full thing, go <a href="https://docs.google.com">Here</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

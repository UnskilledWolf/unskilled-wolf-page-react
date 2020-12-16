import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Particles from 'react-particles-js';
import Section from '../HomeSection';
// import { Link } from 'react-router-dom';

export default function Home()
{
    return (
        <React.Fragment>
            <Container fluid className="my-5">
                <Row>
                    <Col className="particleCol rounded text-center paralaxImage" style={{ backgroundImage: `url(${require("../../assets/index_cover_paralax.png")})` }}>
                        <div className="particelText">
                            <h1>Unskilled Wolf</h1>
                            <sub>AKA: Hexagonal192</sub>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">A page about me!</h2>
                        <p>
                            This is a growing collection of things, that I made and some information about me. I create art, (simple) games, scripts, and websites. I like to use Linux (When I can).
                        </p>
                        <p className="mb-5">
                            <i>Obviously, don't use my code, art, or characters without my permission.</i>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Section href="/art" title="Art" image={require("../../assets/index_art.png")}>
                        I like to create digital art. Although I am still learning, I think my art is getting 'good enough' quality wise, but I still need to improve. I also make some pixel art occasionally. Additionaly, I am working on learning to animate.<br />You can see my art on my DeviantArt page.
                        </Section>
                    <Section href="/websites" title="Web Design" image={require("../../assets/index_code.png")}>
                        I design websites, currently know how to make front end sites with React and how to create back end thigs with NodeJS and express.
                        </Section>
                    <Section href="/games" title="Games" image={require("../../assets/index_games.png")}>
                        I create Video Games, although I have ben focusing on websites for a while. I mainly make very small and simple games, and just some experiments with different engines.
                        </Section>
                </Row>
            </Container>
        </React.Fragment>
    )
}
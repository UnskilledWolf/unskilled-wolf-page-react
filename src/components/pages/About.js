import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title'

export default function About()
{
    return (
        <Container className="text-center">
            <Title>About</Title>
            <Row>
                <Col>
                    <p>
                        Hello, I am a person on the internet.<br />
                        <u>I write code, and make websites.</u> <br />
                        <u>I also create art.</u>
                    </p>
                    <p>
                        I started learning programming at a relatively young age. I have learned a few languages so far. These are all I know how to use.<br />
                        <ul>
                            <li>C#</li>
                            <li>Unity Engine C#</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                            <li>PHP</li>
                            <li>Processing 3</li>
                            <li>Bash</li>
                            <li>ReactJS</li>
                        </ul>
                    </p>
                    <p>
                        <i>Obviously, don't use my code, art, or characters without my permission</i>
                    </p>
                    <p>
                        <a href="https://github.com/UnskilledWolf">GitHub</a> |
                        <a href="https://www.deviantart.com/hexagonal192">DeviantArt</a> |
                        <a href="/about">Twitter<sub>sometime</sub></a> |
                        <a href="/about">Furaffinity<sub>sometime</sub></a>
                    </p>
                    <br />
                    <p>
                        I am also a fan of Linux, so...
                        <br />
                        <i>I use Arch btw</i>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

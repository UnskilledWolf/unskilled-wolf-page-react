import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Particles from 'react-particles-js';
import Section from '../HomeSection';
import { Link } from 'react-router-dom';

export default function Home()
{
    return (
        <React.Fragment>
            <Container fluid className="my-5">
                {/* <Row>
                    <Col className="particleCol rounded text-center">
                        <div className="particelText">
                            <h1>Unskilled Wolf</h1>
                            <sub>AKA: Hexagonal192</sub>
                        </div>
                        <Particles params={PARTICLE_PARAMS} />
                    </Col>
                </Row> */}
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
                        <h2>This is a page about me!</h2>
                        <p>
                            This is a growing collection of things, that I made and some information about me. I create art, (simple)games, scripts, and websites.
                        </p>
                        <p className="mb-5">
                            <i>Obviously, don't use my code, art, or characters without my permission</i>
                        </p>
                        <Section href="/art" title="Art" image={require("../../assets/index_art.png")}>
                            I like to create digital art. Although I am still learning, I think my art is getting 'good enough' quality wise, but I still need to improve. I also make some pixel art occasionally. I am also working on learning to animate.<br />You can see my art on my DeviantArt page.
                        </Section>
                        <Section href="/websites" title="Web Design" image={require("../../assets/index_games.png")}>
                            I design websites, currently I only have experience making static sites, but I am trying to use some APIs, for example my <Link to="/art">Art</Link> page uses DeviantArt's API. The create site, I use ReactJS.<br />I am also slowly starting to learn how to make NodeJS back-ends.

                        </Section>
                        <Section href="/games" title="Games" image={require("../../assets/index_code.png")}>
                            I create Video Games, I mainly make very small and simple games, and just some experiments with different engines, like Processing and Unity3D.
                        </Section>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

// const PARTICLE_PARAMS = {
//     "particles": {
//         "number": {
//             "value": 80,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             }
//         },
//         "color": {
//             "value": "#00a3b9"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 1,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 2,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": true,
//             "distance": 173.61248115909999,
//             "color": "#dffcff",
//             "opacity": 1,
//             "width": 0.6313181133058181
//         },
//         "move": {
//             "enable": true,
//             "speed": 1.5782952832645452,
//             "direction": "top",
//             "random": true,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": false,
//                 "mode": "repulse"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "repulse"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// }
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

//*Pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Websites from './components/pages/Websites';
import Art from './components/pages/Art';
import Furry from './components/pages/Furry';

//*Bootstrap Imports
import NavBar from './components/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App()
{
  return (
    <div className="App">
      <NavBar />

      <div className="mb-3" />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/games"><Games /></Route>
        <Route path="/websites"><Websites /></Route>
        <Route path="/art"><Art /></Route>
        <Route path="/furry"><Furry /></Route>
      </Switch>

      <footer className="text-center mt-5">
        <p className="footer-text">© Unskilled Wolf</p>
        <Particles className="particle-footer" params={PARTICLE_PARAMS} />
        {/* <Container fluid className="mt-1">
          <Row>
            <Col>
              <p>© Unskilled Wolf</p>
            </Col>
          </Row>
        </Container> */}
      </footer>
    </div>
  );
}

const PARTICLE_PARAMS = {
  "particles": {
    "number": {
      "value": 43,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00a3b9"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5782952832645452,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default App;

import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

//*Pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Websites from './components/pages/Websites';
import Art from './components/pages/Art';
import Furry from './components/pages/Furry';

//*Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App()
{
  return (
    <div className="App">
      <Navbar bg="custom" variant="dark" expand="lg">
        <Navbar.Brand className="mr-3"><NavLink to="/" className="navbar-brand mr-0">Unskilled Wolf</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=""></Nav>
          <Nav>
            <NavLink exact className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/games">Games</NavLink>
            <NavLink className="nav-link" to="/websites">Websites</NavLink>
            <NavLink className="nav-link" to="/art">Art</NavLink>
            <NavLink className="nav-link" to="/furry">Furry</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
        <Container className="mt-1">
          <Row>
            <Col>
              <p>© Unskilled Wolf</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;

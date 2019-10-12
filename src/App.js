import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

//*Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App()
{
  return (
    <div className="App">
      <Navbar bg="custom" variant="dark" expand="lg">
        <Navbar.Brand className="mr-3"><NavLink to="/" class="navbar-brand mr-0">Unskilled Wolf</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=""></Nav>
          <Nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/games">Games</NavLink>
            <NavLink className="nav-link" to="/software">Software</NavLink>
            <NavLink className="nav-link" to="/art">Art</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about"></Route>
        <Route path="/text"></Route>
      </Switch>
    </div>
  );
}

export default App;

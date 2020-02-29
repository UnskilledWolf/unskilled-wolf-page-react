import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component
{
    navRef = React.createRef()

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) =>
    {
        console.log(this.navRef.current.offsetTop - document.body.scrollTop)
        if (this.navRef.current.offsetTop - document.body.scrollTop > 75)
        {
            this.navRef.current.classList.add("forst-bg")
        }
        else
        {
            this.navRef.current.classList.remove("forst-bg")
        }
    }

    render()
    {
        return (
            <Navbar bg="custom" variant="dark" expand="lg" ref={this.navRef}>
                <Navbar.Brand className="mr-3"><NavLink to="/" className="navbar-brand mr-0">Unskilled Wolf</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=""></Nav>
                    <Nav>
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/games">Games</NavLink>
                        <NavLink className="nav-link" to="/websites">Websites</NavLink>
                        <NavLink className="nav-link" to="/art">Art</NavLink>
                        {/* <NavLink className="nav-link" to="/furry">Furry</NavLink> */}
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

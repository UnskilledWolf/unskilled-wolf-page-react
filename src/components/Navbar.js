import React, { Component } from 'react'

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
        // console.log(this.navRef.current.offsetTop - document.body.scrollTop)
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
            <div bg="custom" variant="dark" expand="lg" ref={this.navRef}>
                <nav>
                    <a className="nav-link" href="#home">Home</a>
                    <a className="nav-link" href="#games">Games</a>
                    <a className="nav-link" href="#websites">Websites</a>
                    <a className="nav-link" href="#art">Art</a>
                    <a className="nav-link" href="#about">About</a>
                </nav>
            </div>
        )
    }
}

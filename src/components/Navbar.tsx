import React, { Component } from 'react'

export default class NavBar extends Component
{
    private navRef = React.createRef<HTMLDivElement>()

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e: Event) =>
    {
        if (this.navRef.current)
        {
            if (this.navRef.current.offsetTop - document.body.scrollTop > 75)
            {
                this.navRef.current.classList.add("forst-bg")
            }
            else
            {
                this.navRef.current.classList.remove("forst-bg")
            }
        } else { console.warn("No Navbar Ref is registered.") }
    }

    render()
    {
        return (
            <div className="nav-bar" ref={this.navRef}>
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

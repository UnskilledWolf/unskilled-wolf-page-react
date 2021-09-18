import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component<{}, { full: boolean, initialShow: boolean }>
{
    state = {
        full: false,
        initialShow: false
    }

    toggleFull = () =>
    {
        this.setState({ full: !this.state.full, initialShow: true })
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="nav-icon" onClick={this.toggleFull}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
                </div>

                <nav onClick={this.toggleFull} className={`nav-full frost-bg ${this.state.full ? "show" : "hide"}`} style={{ display: this.state.initialShow ? "flex" : "none" }}>
                    <Link className="nav-link" to="/#home">Home</Link>
                    <div className="sub">
                        <a className="nav-link" href="/#art">Art</a>
                        <a className="nav-link" href="/#websites">Websites</a>
                        <a className="nav-link" href="/#code">Code</a>
                        <a className="nav-link" href="/#about">About</a>
                    </div>
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                </nav>
            </React.Fragment>
        )
    }
}
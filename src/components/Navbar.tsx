import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component
{
    render()
    {
        return (
            <div className="nav-bar frost-bg">
                <nav>
                    <div className="section">
                        <Link className="nav-link main" to="/#home">Home</Link>
                        <a className="nav-link" href="/#art">Art</a>
                        <a className="nav-link" href="/#websites">Websites</a>
                        <a className="nav-link" href="/#code">Code</a>
                        <a className="nav-link" href="/#about">About</a>
                    </div>
                    <div className="section">
                        <Link className="nav-link main" to="/gallery">Gallery</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

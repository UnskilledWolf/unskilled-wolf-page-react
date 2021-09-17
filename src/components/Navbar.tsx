import React, { Component } from 'react'

export default class NavBar extends Component
{
    render()
    {
        return (
            <div className="nav-bar frost-bg">
                <nav>
                    <a className="nav-link" href="/#home">Home</a>
                    <a className="nav-link" href="/#art">Art</a>
                    <a className="nav-link" href="/#websites">Websites</a>
                    <a className="nav-link" href="/#code">Code</a>
                    <a className="nav-link" href="/#about">About</a>
                </nav>
            </div>
        )
    }
}

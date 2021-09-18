import React, { Component } from 'react'
import { Link } from 'react-router-dom'

interface INavBarState
{
    progress: number,
    intervalId: number
}

export default class NavBar extends Component<{}, INavBarState>
{
    state = {
        progress: 0,
        intervalId: -69
    }

    getScrollPercent = (): number =>
    {
        const h = document.documentElement
        const b = document.body
        return (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100;
        //https://stackoverflow.com/a/8028584
    }

    componentDidMount()
    {
        const intervalId = setInterval(() =>
        {
            this.setState({ progress: this.getScrollPercent() });
        }, 10);

        this.setState({ intervalId: intervalId as any })
    }

    componentWillUnmount()
    {
        clearInterval(this.state.intervalId);
    }

    render()
    {
        return (
            <div className="nav-bar">
                <div className="progress" style={{ height: `${this.state.progress}%` }} />
                <nav>
                    <Link className="nav-link main" to="/#home" style={{ top: "0", transform: "translate(50%)" }}>Home</Link>
                    <a className="nav-link" href="/#art" style={{ top: "51.5%" }}>Art</a>
                    <a className="nav-link" href="/#websites" style={{ top: "65%" }}>Websites</a>
                    <a className="nav-link" href="/#code" style={{ top: "78.3%" }}>Code</a>
                    <a className="nav-link" href="/#about" style={{ top: "93.9%" }}>About</a>
                    {/* <Link className="nav-link main" to="/gallery">Gallery</Link> */}
                </nav>
            </div>
        )
    }
}

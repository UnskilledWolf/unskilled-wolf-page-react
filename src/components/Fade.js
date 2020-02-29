import React, { Component } from 'react'

export default class Fade extends Component
{

    mainRef = React.createRef()

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll()
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () =>
    {
        // console.log(this.navRef.current.offsetTop - document.body.scrollTop)
        if (this.isVisible(this.mainRef.current))
        {
            this.mainRef.current.classList.add("faded")

            this.props.onReveal()
        }
    }

    isVisible = (elem) =>
    {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    render()
    {
        return (
            <div ref={this.mainRef} className="fade-in">
                {this.props.children}
            </div>
        )
    }
}

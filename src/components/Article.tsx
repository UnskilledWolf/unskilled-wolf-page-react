import React, { Component } from 'react'

export default class Article extends Component<{ image: string }, {}>
{
    render()
    {
        return (
            <div className="article">
                <div className="article-img">
                    <img alt="" src={this.props.image} />
                </div>
                <p>
                    {this.props.children}
                </p>
            </div>
        )
    }
}

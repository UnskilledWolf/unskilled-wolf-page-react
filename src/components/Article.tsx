import React, { Component } from 'react'

export default class Article extends Component<{ image: string, title: string }, {}>
{
    render()
    {
        return (
            <div className="article">
                <div className="article-img">
                    <img alt="" src={this.props.image} />
                </div>
                <p>
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                </p>
            </div>
        )
    }
}

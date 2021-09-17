import React, { Component } from 'react'

export default class Article extends Component<{ image: string, title: string, id?: string }, {}>
{
    render()
    {
        return (
            <div className="article" id={this.props.id}>
                <div className="article-img">
                    <img alt="" src={this.props.image} />
                </div>
                <div className="content">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}

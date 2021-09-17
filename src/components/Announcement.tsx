import React, { Component } from 'react'

export default class Announcement extends Component<{ id?: string, important?: boolean }, {}>
{
    render()
    {
        return (
            <div className={`announcement ${this.props.important ? "important" : ""}`} id={this.props.id} >
                <img alt="" src={require("../assets/announcement.svg")} />
                <div className="content">
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}

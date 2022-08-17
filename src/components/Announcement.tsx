import React, { Component } from 'react'

type Props = {
    id?: string,
    important?: boolean,
    children?: JSX.Element | JSX.Element[],
}

export default function Announcement({ id, important, children }: Props)
{
    return (
        <div className={`announcement ${important ? "important" : ""}`} id={id} >
            <img alt="" src={require("../assets/announcement.svg")} />
            <div className="content">
                <p>{children}</p>
            </div>
        </div>
    )
}
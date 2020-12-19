import React, { ReactElement } from 'react'

interface Props
{
    link: string,
    title: JSX.Element,
    at: string,
    color: string
    tcolor: string
}

export default function LinkBox({ link, title, at, color, tcolor }: Props): ReactElement
{
    return (
        <a href={link} className="link-box">
            <div style={{ backgroundColor: color, color: tcolor }}>
                <p className="title">{title}</p>
                <p className="at">{at}</p>
            </div>
        </a>
    )
}

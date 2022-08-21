import React, { ReactElement } from 'react'

interface Props
{
    link: string,
    icon: JSX.Element,
    at: string
}

export default function LinkBox({ link, icon, at }: Props): ReactElement
{
    return (
        <a href={link} className="link-box">
            {icon}
            <p className="at">{at}</p>
        </a>
    )
}

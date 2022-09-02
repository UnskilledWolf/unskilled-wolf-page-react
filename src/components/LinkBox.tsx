import React, { ReactElement } from 'react'

interface Props
{
    /** The link to direct to when clicked */
    link: string,
    /** The Icon Element to show */
    icon: JSX.Element,
    /** The Link's title / Social Media account name */
    at: string
}

/**
 * A box with a icon and at name that links to somewhere.
 * @component
 */
export default function LinkBox({ link, icon, at }: Props): ReactElement
{
    return (
        <a href={link} className="link-box">
            {icon}
            <p className="at">{at}</p>
        </a>
    )
}

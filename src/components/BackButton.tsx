import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BackSVG } from '../assets/arrow_back.svg';

export default function BackButton(props: { to: string })
{
    return (
        <Link to={props.to} className="back-button"><BackSVG /></Link>
    )
}

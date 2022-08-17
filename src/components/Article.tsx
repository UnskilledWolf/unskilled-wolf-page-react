import React, { Component } from 'react'

type Props = {
    image: string,
    title: string,
    id?: string,
    children?: JSX.Element | JSX.Element[],
}
export default function Article({ image, title, id, children }: Props)
{

    return (
        <div className="article" id={id}>
            <div className="article-img">
                <img alt="" src={image} />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    )

}

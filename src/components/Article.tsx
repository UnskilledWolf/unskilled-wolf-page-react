import React from 'react'

type Props = {
    image: string,
    title: string,
    id?: string,
    right?: boolean,
    children?: JSX.Element | JSX.Element[],
}
export default function Article({ image, title, id, right, children }: Props)
{

    return (
        <div className={`article ${right ? "right" : ""}`} id={id}  >
            <div className="bg" style={{ backgroundImage: `url(${image})` }} />
            <div className="content">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )

}

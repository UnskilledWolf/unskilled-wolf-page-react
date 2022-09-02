import React from 'react'

type Props = {
    /** Path to the image displayed on top */
    image: string,
    /** Title of the article. */
    title: string,
    /** ID value of the article's wrapping div */
    id?: string,
    /** Toggle the article content's flippable class' */
    flippable?: boolean,
    /** Toggle the article content's flipped class' */
    flipped?: boolean

    children?: JSX.Element | JSX.Element[],
}

/**
 * Creates the HTML structure for a article.
 * If flippable is true, the children must be in a .front and a .back div. Which one would be shown would depend on the flipped prop.
 * 
 * @component
 * @example
 * <Article id="hello" title="Hello World" image='/images/Hello.png'>
 *  <p>Hi</p>
 * </Article> 
 */
export default function Article({ image, title, id, flippable, flipped, children }: Props)
{
    return (
        <div className="article" id={id}  >
            <div className="bg" style={{ backgroundImage: `url(${image})` }} />
            <h2>{title}</h2>
            <div className={`content  ${flippable ? 'flippable' : ''} ${flipped ? 'flipped' : ''}`}>
                {children}
            </div>
        </div>
    )

}

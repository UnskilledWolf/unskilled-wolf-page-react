import React, { Component } from 'react'
import { IImageThumb } from '../types';
import { gql, GraphQLClient } from 'graphql-request'

const SERVER_URL = "https://graphql.fauna.com/graphql";
const PAGE_SIZE = 5;
const client = new GraphQLClient(SERVER_URL, {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_READ_ONLY_KEY}`
    }
})

interface IGalleryState
{
    images: IImageThumb[],
    after: string
}

export default class Gallery extends Component<{}, IGalleryState>
{
    state = {
        after: "",
        images: []
    }

    getPage = (cursor?: string) =>
    {
        let query = gql`
        query {
        allImages(_size:${PAGE_SIZE}${cursor ? ", _cursor:" + cursor : ""}){
            data {
                title,
                thumbnailUrl,
                date
            },
            before,
            after
        }
        }
        `;

        client.request(query)
            .then((data) => this.setState(
                {
                    images: data.allImages.data.map((img: any) =>
                    {
                        return {
                            date: new Date(img.date),
                            thumbnailUrl: img.thumbnailUrl,
                            title: img.title
                        }
                    }),
                    after: data.allImages.after
                }
            ))
    }

    renderImages = () =>
    {
        return this.state.images.map((img: IImageThumb, i) =>
            <div className="gallery-img" key={i}>
                {/* <img src={img.thumbnailUrl} alt={`${img.title} Thumbnail`} /> */}
                <img src="/logo512.png" alt={`${img.title} Thumbnail`} />
                <div className="info">
                    <p className="title">{img.title}</p>
                    <p className="date">{img.date.toDateString()}</p>
                </div>
            </div>
        )
    }

    componentDidMount()
    {
        this.getPage();
    }

    render()
    {
        return (
            <div id="gallery">
                <h1>Gallery</h1>
                {this.renderImages()}
            </div>
        )
    }
}

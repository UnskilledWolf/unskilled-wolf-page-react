import React, { Component } from 'react'
import { IImageThumb } from '../types';
import { gql, GraphQLClient } from 'graphql-request'
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const PAGE_SIZE = 5;

interface IGalleryState
{
    images: IImageThumb[],
    after: string
}

export default class Gallery extends Component<{ GQLClient: GraphQLClient }, IGalleryState>
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
                file,
                date,
                _id
            },
            before,
            after
        }
        }
        `;

        this.props.GQLClient.request(query)
            .then((data) => this.setState(
                {
                    images: data.allImages.data.map((img: any) =>
                    {
                        return {
                            date: new Date(img.date),
                            file: img.file,
                            title: img.title,
                            id: img._id
                        }
                    }),
                    after: data.allImages.after
                }
            ))
    }

    renderImages = () =>
    {
        return this.state.images.map((img: IImageThumb, i) =>
            <Link className="gallery-img" key={i} to={`/gallery/img/${img.id}`}>
                <img src={this.getThumbnail(img.file)} alt={`${img.title} Thumbnail`} />
                <div className="info">
                    <p className="title">{img.title}</p>
                    <p className="date">{img.date.toDateString()}</p>
                </div>
            </Link>
        )
    }

    getThumbnail = (img: string): string =>
    {
        if (img)
        {
            const thumbnailFolder = "/images/thumbnail"
            let fileName = img.substr(0, img.length - 3) + "jpg"

            return thumbnailFolder + "/" + fileName
        }
        else
        {
            return ""
        }
    }

    componentDidMount()
    {
        this.getPage();
    }

    render()
    {
        return (
            <div id="gallery">
                <BackButton to="/" />
                <h1>Gallery</h1>
                <div className="gallery-main">
                    {this.renderImages()}
                </div>
            </div>
        )
    }
}

import { gql, GraphQLClient } from 'graphql-request';
import React, { Component } from 'react'
import BackButton from '../components/BackButton';
import { IImage } from '../types'

interface IImageState
{
    image: IImage,
    error: boolean
}

export default class Image extends Component<{ match: any, GQLClient: GraphQLClient }, IImageState> {

    state = {
        image: {
            title: "",
            type: "",
            old: false,
            file: "",
            date: new Date()
        },
        error: false
    }

    getImageLink = () =>
    {
        const thumbnailFolder = "/images/"
        let fileName = this.state.image.file

        return thumbnailFolder + "/" + fileName
    }

    componentDidMount()
    {
        // Get image data
        let query = gql`
            query {
            findImageByID(id:${this.props.match.params.id}) {
                old,
                date,
                file,
                title,
                type
            }
            }
        `;

        this.props.GQLClient.request(query)
            .then((data) => this.setState(
                {
                    image: {
                        ...data.findImageByID,
                        date: new Date(data.findImageByID.date)
                    },
                    error: false
                }
            )).catch((e) =>
            {
                console.error(e)
                this.setState({ error: true })
            })
    }

    render()
    {
        let image = { ...this.state.image }
        if (this.state.image && !this.state.error)
            return (
                <React.Fragment>
                    <BackButton to="/gallery" />
                    <div className="article" id="image">
                        <img src={this.getImageLink()} alt={`Drawing titled ${image.title}`} />
                    </div>
                    <div className="article" id="image-description">
                        <h1>&ldquo;{image.title}&bdquo;</h1>
                        <p>Drawn on: {image.date.toLocaleDateString()}</p>
                        <p>Type: {image.type}</p>
                    </div>
                </React.Fragment>
            )
    }
}

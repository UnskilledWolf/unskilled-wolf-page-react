export interface IImage
{
    tags: string[],
    imageName: string,
    date: Date,
    title: string,
    type: string
}

export interface IImageThumb
{
    date: Date,
    thumbnailUrl: string,
    title: string
}
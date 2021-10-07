export interface IImage
{
    title: string,
    type: string,
    old: boolean,
    tags?: [string],
    file: string,
    date: Date,
    id?: string
}

export interface IImageThumb
{
    title: string,
    file: string,
    date: Date,
    id: string
}
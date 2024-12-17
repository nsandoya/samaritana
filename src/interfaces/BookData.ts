export interface BookData {
    title: string,
    subtitle?: string,
    paragraph: string,
    image: string,
    links?: BookLinks | string
}

export interface BookLinks {
    title: string,
    link: string,
    style?: string
}
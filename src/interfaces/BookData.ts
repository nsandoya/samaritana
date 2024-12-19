import type { BookReview } from "./BookReview"

export interface BookData {
    slug: string,
    title: string,
    subtitle?: string,
    description: string,
    image: string,
    links?: BookLinks[],
    reviews?: BookReview[]
}

export interface BookLinks {
    title: string,
    link: string,
    style?: string
}
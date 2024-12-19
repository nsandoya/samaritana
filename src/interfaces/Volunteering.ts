import type { ImageData } from "./BlogPost";

export interface Volunteering {
    slug: string,
    title:     string;
    subtitle:  string;
    slogan:    string;
    path:      string;
    paragraph: string;
    image:     ImageData;
    links:     Link[];
}

export interface Link {
    title: string;
    link:  string;
}

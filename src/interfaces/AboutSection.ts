import type { ImageData } from "./BlogPost";
import type { ButtonData } from "./ButtonData";

export interface About {
    id?: string,
    title: string,
    subtitle?: string,
    paragraph: string,
    button?: ButtonData,
    image: ImageData,
    direction?: string,
    color?: boolean
}
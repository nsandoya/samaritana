import type { ButtonData } from "./ButtonData";

export interface About {
    title: string,
    subtitle?: string,
    paragraph: string,
    button?: ButtonData,
    image: string,
    direction?: string,
    color?: boolean
}
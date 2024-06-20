import { TextStyle } from "react-native"

export type TextType = {
    text: string,
    color?: string,
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}
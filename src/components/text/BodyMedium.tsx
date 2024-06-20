import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";

const BodyMedium = ({text, color, textAlign}: TextType) => {
    return (
        <Text style={[styles.text, {color: color ?? 'black', textAlign: textAlign}]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '400'
    }
})

export default BodyMedium
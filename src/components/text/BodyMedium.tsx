import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";

const BodyMedium = (props: TextType) => {
    return (
        <Text style={[styles.text, {color: props.color ?? 'black'}]}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '400'
    }
})

export default BodyMedium
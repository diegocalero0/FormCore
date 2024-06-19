import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";

const Headline1 = (props: TextType) => {
    return (
        <Text style={styles.text}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'black'
    }
})

export default Headline1
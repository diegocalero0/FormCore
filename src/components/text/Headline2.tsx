import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";

const Headline2 = (props: TextType) => {
    return (
        <Text style={styles.text}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '800',
        color: 'black'
    }
})

export default Headline2
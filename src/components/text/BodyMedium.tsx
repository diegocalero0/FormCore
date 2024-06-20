import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";
import { useTheme } from "@react-navigation/native";

const BodyMedium = ({text, color, textAlign}: TextType) => {

    const { colors } = useTheme();

    return (
        <Text style={[styles.text, {color: color ?? colors.text, textAlign: textAlign}]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '400'
    }
})

export default BodyMedium
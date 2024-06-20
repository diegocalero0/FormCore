import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";
import { useTheme } from "@react-navigation/native";

const Headline2 = ({text, textAlign}: TextType) => {

    const { colors } = useTheme();
    const styles = makeStyles(colors)

    return (
        <Text style={[styles.text, {textAlign: textAlign}]}>{text}</Text>
    )
}

const makeStyles = (colors: any) => StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.text
    }
})

export default Headline2
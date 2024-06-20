import { StyleSheet, Text } from "react-native";
import { TextType } from "./types/TextType";
import { useTheme } from "@react-navigation/native";

const Headline1 = (props: TextType) => {
    const { colors } = useTheme();
    const styles = makeStyles(colors)

    return (
        <Text style={styles.text}>{props.text}</Text>
    )
}

const makeStyles = (colors: any) => StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.text
    }
})

export default Headline1
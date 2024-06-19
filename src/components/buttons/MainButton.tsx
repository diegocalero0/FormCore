import { StyleSheet, TouchableOpacity } from "react-native"
import BodyMedium from "../text/BodyMedium"

interface MainButtonProps {
    text: string,
    disabled: boolean
}

const MainButton = ({ text, disabled } : MainButtonProps) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.button, {backgroundColor: disabled ? "#BEBEBE" : "#003670"}]}>
            <BodyMedium text={text} color="white"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    }
})

export default MainButton
import { StyleSheet, TouchableOpacity } from "react-native"
import BodyMedium from "../text/BodyMedium"

interface MainButtonProps {
    text: string,
    disabled?: boolean,
    onPress: () => void
}

const MainButton = ({ text, disabled, onPress } : MainButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, {backgroundColor: disabled ? "#BEBEBE" : "#003670"}]}>
            <BodyMedium text={text} color="white"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    }
})

export default MainButton
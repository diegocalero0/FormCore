import { StyleSheet, TouchableOpacity } from "react-native"
import BodyMedium from "../text/BodyMedium"

interface MainButtonProps {
    text: string,
    disabled?: boolean,
    onPress: () => void
}

const OutlinedButton = ({ text, disabled, onPress } : MainButtonProps) => {

    const color = disabled ? "#BEBEBE" : "#003670"

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, {borderColor: color}]}>
            <BodyMedium text={text} color={color}/>
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
        borderWidth: 1
    }
})

export default OutlinedButton
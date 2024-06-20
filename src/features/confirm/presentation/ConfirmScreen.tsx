import LottieView from "lottie-react-native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Headline2 from "../../../components/text/Headline2"
import BodyMedium from "../../../components/text/BodyMedium"
import MainButton from "../../../components/buttons/MainButton"
import OutlinedButton from "../../../components/buttons/OutlinedButton"
import { RootStackParamList } from "../../../App"
import { StackScreenProps } from "@react-navigation/stack"

type Props = StackScreenProps<RootStackParamList, "Confirm">

export const ConfirmScreen = ({navigation}: Props) => {
    const navigateToForm = () => {
        navigation.replace("Form")
    }

    const navigateToFinish = () => {
        navigation.replace("Finish")
    }

    return (<View style={styles.mainContainer}>
        <LottieView
            source={require('../../../assets/json/success_animation.json')}
            autoPlay
            loop
            style={styles.animation} />
        <Headline2 text="Respuestas enviadas" />
        <BodyMedium
            text="Tus respuestas se han enviado correctamente."
            textAlign="center" />
        <View style={styles.retryQuestion}>
            <Headline2
                text="¿Deseas volver a responder el formulario?"
                textAlign="center" />
        </View>
        <View style={styles.button}>
            <MainButton text="Volver a responder" onPress={navigateToForm} />
        </View>
        <View style={styles.button}>
            <OutlinedButton text="Finalizar" onPress={navigateToFinish} />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    animation: {
        width: 128,
        height: 128
    },
    retryQuestion: {
        marginTop: 16
    },
    button: {
        width: '100%',
        marginTop: 16
    }
})

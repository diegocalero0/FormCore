import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../../App"
import { StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"
import BodyMedium from "../../../components/text/BodyMedium"
import Headline2 from "../../../components/text/Headline2"
import MainButton from "../../../components/buttons/MainButton"
import { useTheme } from "@react-navigation/native"
import TeamCoreLogo from "../../../components/logo/TeamCoreLogo"

type Props = StackScreenProps<RootStackParamList, "Finish">

export const FinishScreen = ({ navigation }: Props) => {

    const { colors } = useTheme();
    const styles = makeStyles(colors)

    const navigateToForm = () => {
        navigation.replace("Form")
    }

    return (<View style={styles.mainContainer}>
        <View style={styles.logo}>
            <TeamCoreLogo/>
        </View>
        <View style={styles.content}>
            <LottieView
                source={require('../../../assets/json/success_animation.json')}
                autoPlay
                loop
                style={styles.animation} />
            <Headline2 text="Gracias por completar el formulario" textAlign="center" />
            <BodyMedium
                text="El equipo de Teamcore te agradece por el tiempo que dedicaste."
                textAlign="center" />
            <View style={styles.button}>
                <MainButton text="Volver al inicio" onPress={navigateToForm} />
            </View>
        </View>
    </View>)

}

const makeStyles = (colors: any) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation: {
        width: 200,
        height: 200,
        resizeMode: 'cover'
    },
    button: {
        width: '100%',
        marginTop: 16
    },
    logo: {
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})

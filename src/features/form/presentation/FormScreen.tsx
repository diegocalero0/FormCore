import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { areAllQuestionsAnswered, getQuestions, resetState, sendAnswers } from "../domain/redux/FormSlice";
import { useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import Headline1 from "../../../components/text/Headline1";
import BodyMedium from "../../../components/text/BodyMedium";
import MainButton from "../../../components/buttons/MainButton";
import Headline2 from "../../../components/text/Headline2";
import LottieView from "lottie-react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { Snackbar } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import TeamCoreLogo from "../../../components/logo/TeamCoreLogo";

type Props = StackScreenProps<RootStackParamList, "Form">

export function FormScreen({ navigation }: Props) {

    const { colors } = useTheme();
    const styles = makeStyles(colors)

    const dispatch = useAppDispatch()
    const answersSent = useAppSelector(state => state.formReducer.answersSent)
    const questions = useAppSelector(state => state.formReducer.questions)
    const loading = useAppSelector(state => state.formReducer.loading)
    const error = useAppSelector(state => state.formReducer.error)
    const errorSendingAnswers = useAppSelector(state => state.formReducer.errorSendingAnswers)
    const isMainButtonEnabled = useAppSelector(state => areAllQuestionsAnswered({ form: state.formReducer }))

    useEffect(() => {
        dispatch(getQuestions())
    }, [])

    useEffect(() => {
        if (answersSent) {
            dispatch(resetState())
            navigation.replace("Confirm")
        }
    }, [answersSent])


    const ScreenLoader = () => {
        return (<View style={styles.loaderContainer}>
            <ActivityIndicator size={32} color={colors.primary} />
        </View>)
    }

    const ScreenError = () => {
        return (<View style={styles.errorContainer}>
            <LottieView
                source={require('../../../assets/json/error_animation.json')}
                autoPlay
                loop
                style={styles.errorAnimation} />
            <Headline2 text="Ocurrió un error" />
            <BodyMedium
                text={error ?? ""}
                textAlign="center" />
            <View style={styles.retryButton}>
                <MainButton
                    text="Reintentar"
                    disabled={false}
                    onPress={() => {
                        dispatch(getQuestions())
                    }} />
            </View>
        </View>)
    }

    if (loading) {
        return <ScreenLoader />
    }

    if (error != null) {
        return <ScreenError />
    }

    return (
        <View style={styles.mainContainer}>

            {loading && <ScreenLoader />}
            {error != null && !loading && <ScreenError />}
            {error == null && !loading &&
                <SafeAreaView style={styles.scrollSafeAreaView}>
                    <ScrollView
                    contentContainerStyle={styles.scrollViewContentContainer}
                    style={styles.scrollSafeAreaView}>
                    <View style={styles.greetings}>
                        <TeamCoreLogo/>
                        <Headline1 text="¡Bienvenido a Formcore LATAM! 👋" />
                        <BodyMedium text="Contesta el siguiente formulario para probar tus conocimientos sobre cultura general, ¡Buena suerte! " />
                    </View>
                    <View style={styles.questionsContainer}>
                        {
                            questions?.map(question => {
                                return <View key={question.questionId} style={{ marginVertical: 8 }}>
                                    <QuestionCard question={question} />
                                </View>

                            })
                        }
                    </View>
                </ScrollView>
                </SafeAreaView>
            }
            <View style={styles.buttonContainer}>
                <SafeAreaView>
                <MainButton onPress={() => {
                    dispatch(sendAnswers(questions))
                }} text="Finalizar" disabled={!isMainButtonEnabled} />
                </SafeAreaView>
            </View>
            <Snackbar
                visible={errorSendingAnswers != null}
                duration={5000}
                onDismiss={() => {
                    dispatch(resetState())
                }}>
                {errorSendingAnswers}
            </Snackbar>
        </View>
    )
}

const makeStyles = (colors: any) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        paddingHorizontal: 24
    },
    greetings: {
        marginHorizontal: 16,
        marginBottom: 16
    },
    scrollSafeAreaView: {
        width: '100%',
        flex: 1
    },
    scrollViewContentContainer: {
        paddingVertical: 16
    },
    questionsContainer: {
        marginHorizontal: 16
    },
    buttonContainer: {
        width: '100%',
        padding: 16,
        backgroundColor: colors.card,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 12,
    },
    errorAnimation: {
        width: 128,
        height: 128
    },
    retryButton: {
        width: '100%',
        marginTop: 16
    }
})
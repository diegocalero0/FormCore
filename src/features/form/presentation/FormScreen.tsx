import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { areAllQuestionsAnswered, getQuestions, resetState, sendAnswers } from "../domain/redux/FormSlice";
import { useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import Headline1 from "../../../components/text/Headline1";
import { SvgUri } from "react-native-svg";
import BodyMedium from "../../../components/text/BodyMedium";
import MainButton from "../../../components/buttons/MainButton";
import Headline2 from "../../../components/text/Headline2";
import LottieView from "lottie-react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type Props = StackScreenProps<RootStackParamList, "Form">

export function FormScreen({route, navigation}: Props) {

    const dispatch = useAppDispatch()

    const answersSent = useAppSelector(state => state.formReducer.answersSent)
    const questions = useAppSelector(state => state.formReducer.questions)
    const loading = useAppSelector(state => state.formReducer.loading)
    const error = useAppSelector(state => state.formReducer.error)
    const isMainButtonEnabled = useAppSelector(state => areAllQuestionsAnswered({form: state.formReducer}))

    useEffect(() => {
        dispatch(getQuestions())
    }, [])

    useEffect(() => {
        if(answersSent) {
            dispatch(resetState())
            navigation.navigate("Confirm")
        }
    }, [answersSent])

   

    const ScreenLoader = () => {
        return(<View style={styles.loaderContainer}>
            <ActivityIndicator size={32}/>
        </View>)
    }

    const ScreenError = () => {
        return(<View style={styles.errorContainer}>
            <LottieView
                source={require('../../../assets/json/error_animation.json')}
                autoPlay
                loop
                style={styles.errorAnimation}/>
            <Headline2 text="Ocurrió un error"/>
            <BodyMedium
                text="No pudimos obtener las preguntas del formulario, intenta más tarde o reinténtalo."
                textAlign="center"/>
            <View style={styles.retryButton}>
            <MainButton
                text="Reintentar"
                disabled={false}
                onPress={() => {
                    dispatch(getQuestions())
                }}/>
            </View>
        </View>)
    }

    if(loading) {
        return <ScreenLoader/>
    }

    if(error != null) {
        return <ScreenError/>
    }

    return (
        <View style={styles.mainContainer}>

            {loading && <ScreenLoader/>}   
            {error != null && !loading && <ScreenError/>}
            {error == null && !loading &&

            <ScrollView
                contentContainerStyle={styles.scrollViewContentContainer}
                style={styles.scrollView}>
                <View style={styles.greetings}>
                    <SvgUri
                        height={100}
                        width={200}
                        uri="https://www.teamcore.net/wp-content/uploads/2020/10/logoteamcore-azul-37.svg"
                    />
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
            </ScrollView>}
            <View style={styles.buttonContainer}>
                <MainButton onPress={() => {
                    dispatch(sendAnswers(questions))
                }} text="Enviar respuestas" disabled={!isMainButtonEnabled}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 24
    },
    greetings: {
        marginHorizontal: 16,
        marginBottom: 16
    },
    scrollView: {
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
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: -4
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
        marginTop: 16
    }
})
import { ScrollView, StyleSheet, View } from "react-native";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { areAllQuestionsAnswered, getQuestions } from "../domain/redux/FormSlice";
import { QuestionsRepository } from "../data/repositories/QuestionsRepository";
import { useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import Headline1 from "../../../components/text/Headline1";
import { SvgUri } from "react-native-svg";
import BodyMedium from "../../../components/text/BodyMedium";
import MainButton from "../../../components/buttons/MainButton";

export function FormScreen() {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.formReducer.questions)
    const isMainButtonEnabled = useAppSelector(state => areAllQuestionsAnswered({form: state.formReducer}))

    useEffect(() => {
        dispatch(getQuestions(new QuestionsRepository()))
    }, [])

    return (
        <View style={styles.mainContainer}>
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
                        data?.map(question => {
                            return <View key={question.questionId} style={{ marginVertical: 8 }}>
                                <QuestionCard question={question} />
                            </View>

                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <MainButton text="Enviar respuestas" disabled={!isMainButtonEnabled}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    greetings: {
        marginHorizontal: 16,
        marginBottom: 16
    },
    scrollView: {
        width: '100%',
        backgroundColor: 'white',
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
    }
})
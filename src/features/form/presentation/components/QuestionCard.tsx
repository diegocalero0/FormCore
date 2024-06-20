import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AnswerModel, QuestionModel } from "../../domain/models/QuestionModel";
import Headline2 from "../../../../components/text/Headline2";
import { RadioButton } from "react-native-paper";
import BodyMedium from "../../../../components/text/BodyMedium";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { isAnswerSelected, selectAnswer } from "../../domain/redux/FormSlice";
import { useTheme } from "@react-navigation/native";

interface QuestionCardProps {
    question: QuestionModel;
}

const QuestionCard = ({ question }: QuestionCardProps) => {

    const { colors } = useTheme()
    const styles = makeStyles(colors)

    const dispatch = useAppDispatch()

    const AnswerRadioButton = (answer: AnswerModel) => {
        const isSelected = useAppSelector(state => isAnswerSelected({ form: state.formReducer }, question, answer))
        return <View key={answer.answerId} style={styles.answerRadioButton}>
            <RadioButton
                value={answer.answerId}
                color="#003670"
                status={isSelected ? "checked" : "unchecked"}
                disabled={false}
                onPress={() => {
                    dispatch(selectAnswer({ answer, question }))
                }} />
            <TouchableOpacity style={styles.radioButtonText} onPress={() => {
                dispatch(selectAnswer({ answer, question }))
            }}>
                <BodyMedium text={answer.answer} />
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={styles.card}>
            <Headline2 text={question.question} />
            <View style={styles.answersContainer}>
                {
                    question.answers.map((answer: AnswerModel) => AnswerRadioButton(answer))
                }
            </View>
        </View>
    )
}

const makeStyles = (colors: any) => StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        backgroundColor: colors.card,
        borderRadius: 6,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    answerRadioButton: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    answersContainer: {
        marginTop: 8
    },
    radioButtonText: {
        width: '100%'
    }
})

export default QuestionCard
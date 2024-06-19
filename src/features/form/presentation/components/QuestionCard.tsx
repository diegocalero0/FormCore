import { StyleSheet, Text, View } from "react-native";
import { QuestionModel } from "../../domain/models/QuestionModel";
import Headline1 from "../../../../components/text/Headline1";

interface QuestionCardProps {
    question: QuestionModel;
}

const QuestionCard = (props: QuestionCardProps) => {
    const question = props.question
    return (
        <View style={styles.card}>
            <Headline1 text={question.question} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default QuestionCard
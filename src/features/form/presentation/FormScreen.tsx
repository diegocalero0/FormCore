import { Text, TouchableOpacity, View } from "react-native";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { getQuestions } from "../domain/redux/FormSlice";
import { QuestionsRepository } from "../data/repositories/QuestionsRepository";
import { useEffect } from "react";
import QuestionCard from "./components/QuestionCard";

export function FormScreen() {

    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.formReducer.questions)
    
    useEffect(() => {
        dispatch(getQuestions(new QuestionsRepository()))
    }, [])
 
    return (
        <View style={{width: '100%'}}>
            <Text>
                Form Screen

            </Text>
            <View style={{alignSelf: 'stretch', marginHorizontal: 16}}>
            { 
                data?.map(question => {
                    return <View style={{marginVertical: 8}}>
                         <QuestionCard key={question.questionId} question={question}/>
                    </View>
                       
                })
            }
            </View>
        </View>
    )
}
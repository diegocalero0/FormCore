import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AnswerModel, QuestionModel } from "../models/QuestionModel"
import { QuestionsRepository } from "../../data/repositories/QuestionsRepository"

type QuestionAndAnswer = {
    question: QuestionModel,
    answer: AnswerModel
  };

type FormState = {
    questions: QuestionModel[]
}

const initialState: FormState = {
    questions: []
}

export const getQuestions = createAsyncThunk(
    'getQuestions',
    async (repository: QuestionsRepository) => {
        const response = await repository.getQuestions()
        return response
    }
)

export const formSlice = createSlice({
    name: "form",
    initialState: initialState,
    selectors: {
        isAnswerSelected: (state, question: QuestionModel, answer: AnswerModel) => {
            let indexOfQuestion = state.questions.indexOf(question)
            if(indexOfQuestion != -1) {
                let question = state.questions[indexOfQuestion]
                return question.selectedAnswer?.answerId == answer.answerId
            }
            return false
        },
        areAllQuestionsAnswered: (state) => {
            for(let i = 0; i < state.questions.length; i++) {
                let question = state.questions[i]
                if(question.selectedAnswer == null) {
                    console.log("Joder")
                    return false
                }
            }
            console.log("Bien")
            return true
        }
    },
    reducers: {
        selectAnswer: (state, action: PayloadAction<QuestionAndAnswer>) => {
            for(let i = 0; i < state.questions.length; i++) {
                let question = state.questions[i]
                if(question.questionId == action.payload.question.questionId) {
                    state.questions[i].selectedAnswer = action.payload.answer
                    return
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getQuestions.fulfilled, (state, action: PayloadAction<QuestionModel[]>) => {
            state.questions.splice(0, state.questions.length);
            state.questions = action.payload
        })
    }
})

export const { selectAnswer } = formSlice.actions
export const { isAnswerSelected, areAllQuestionsAnswered } = formSlice.selectors

export default formSlice.reducer
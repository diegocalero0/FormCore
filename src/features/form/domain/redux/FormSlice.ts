import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AnswerModel, QuestionModel } from "../models/QuestionModel"
import { QuestionsRepository } from "../../data/repositories/QuestionsRepository";

type QuestionAndAnswer = {
    question: QuestionModel,
    answer: AnswerModel
};

type FormState = {
    questions: QuestionModel[],
    loading: boolean,
    error: string | null
    sendingAnswers: boolean,
    errorSendingAnswers: string | null
    answersSent: boolean
}

const initialState: FormState = {
    questions: [],
    loading: false,
    error: null,
    sendingAnswers: false,
    errorSendingAnswers: null,
    answersSent: false
}

export const getQuestions = createAsyncThunk(
    'getQuestions',
    async () => {
        const response = await QuestionsRepository.getQuestions()
        return response
    }
)

export const sendAnswers = createAsyncThunk(
    'sendAnswers',
    async (questionsWithAnswers: QuestionModel[]) => {
        const response = await QuestionsRepository.sendAnswers(questionsWithAnswers)
        return response
    }
)

export const formSlice = createSlice({
    name: "form",
    initialState: initialState,
    selectors: {
        isAnswerSelected: (state, question: QuestionModel, answer: AnswerModel) => {
            let indexOfQuestion = state.questions.indexOf(question)
            if (indexOfQuestion != -1) {
                let question = state.questions[indexOfQuestion]
                return question.selectedAnswer?.answerId == answer.answerId
            }
            return false
        },
        areAllQuestionsAnswered: (state) => {
            for (let i = 0; i < state.questions.length; i++) {
                let question = state.questions[i]
                if (question.selectedAnswer == null) {
                    return false
                }
            }
            return true
        }
    },
    reducers: {
        selectAnswer: (state, action: PayloadAction<QuestionAndAnswer>) => {
            for (let i = 0; i < state.questions.length; i++) {
                let question = state.questions[i]
                if (question.questionId == action.payload.question.questionId) {
                    state.questions[i].selectedAnswer = action.payload.answer
                    return
                }
            }
        },
        resetState: (state) => {
            state.error = null
            state.errorSendingAnswers = null
            state.loading = false
            state.sendingAnswers = false
            state.answersSent = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getQuestions.pending, (state) => {
            state.loading = true
        })
            .addCase(getQuestions.fulfilled, (state, action: PayloadAction<QuestionModel[]>) => {
                state.questions.splice(0, state.questions.length);
                state.questions = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getQuestions.rejected, (state) => {
                state.loading = false
                state.error = "Ocurrió un error obteniendo los las preguntas, por favor intenta nuevamente."
            })
        builder.addCase(sendAnswers.pending, (state) => {
            state.sendingAnswers = true
        })
            .addCase(sendAnswers.fulfilled, (state) => {
                state.sendingAnswers = false
                state.errorSendingAnswers = null
                state.answersSent = true
            })
            .addCase(sendAnswers.rejected, (state) => {
                state.sendingAnswers = false
                state.errorSendingAnswers = "Ocurrió un error enviando las respuestas, por favor intenta nuevamente."
            })
    }
})

export const { selectAnswer, resetState } = formSlice.actions
export const { isAnswerSelected, areAllQuestionsAnswered } = formSlice.selectors

export default formSlice.reducer
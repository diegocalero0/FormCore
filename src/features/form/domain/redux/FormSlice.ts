import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { QuestionModel } from "../models/QuestionModel"
import { QuestionsRepository } from "../../data/repositories/QuestionsRepository"

interface FormState {
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
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getQuestions.fulfilled, (state, action: PayloadAction<QuestionModel[]>) => {
            state.questions.splice(0, state.questions.length);
            state.questions = action.payload
        })
    }
})

export default formSlice.reducer
import { configureStore } from "@reduxjs/toolkit"
import formReducer from "../features/form/domain/redux/FormSlice"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
    reducer: {
        formReducer
    }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Axios"


const initialState = {
    questions: [],
    status: 'idle',
    error: null
}

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async () => {

    try {
        const res = await axiosInstance.get("/2.3/questions?order=desc&sort=votes&site=stackoverflow&filter=!6WPIomo1fLW)M");
        return res.data.items
    } catch (err) {
        return err.message
    }

})

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducer: {

    },
    extraReducers(builder){
        builder.
        addCase(fetchQuestions.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(fetchQuestions.fulfilled, (state, actions) => {
            state.status = "succeeded"
            state.questions = actions.payload
        })
        .addCase(fetchQuestions.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default questionsSlice.reducer

export const selectAllQuestions = (state) => state.questions.questions
export const getQuestionsStatus = (state) => state.questions.status
export const getQuestionsError = (state) => state.questions.error
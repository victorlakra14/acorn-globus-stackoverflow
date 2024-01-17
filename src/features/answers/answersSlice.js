import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Axios"


const initialState = {
    answers: [],
    status: "idle",
    error: null
}

export const fetchAnswers = createAsyncThunk("answers/fetchAnswers", async (question_id) => {
    try {
        const res = await axiosInstance.get(`/2.3/questions/${question_id}/answers?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNe7D9`);
        console.log("res", res);
    } catch (err) {
        return err.message
    }
})

export const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducer: {

    },
    extraReducers(builder){
        builder
        .addCase(fetchAnswers.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(fetchAnswers.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.answers = action.payload
        })
        .addCase(fetchAnswers.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default answersSlice.reducer

export const selectAllAnswers = (state) => state.answers.answers
export const getAnswersStatus = (state) => state.answers.status
export const getAnswersError = (state) => state.answers.error
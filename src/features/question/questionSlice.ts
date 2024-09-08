import { createSlice } from '@reduxjs/toolkit'
// import dummyData from "../../data.json"
import { QuestionState } from '../../types'

const initialState: QuestionState = {
    name: "",
    // questions: dummyData.results, // debug purpose
    questions: [],
    options: null,
    currQuestion: 0,
    loading: false,
    error: ""
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setQuestions: (state, action) => {
            state.questions = action.payload
        },
        setOptions: (state, action) => {
            state.options = action.payload
        },
        setCurrQuestion: (state, action) => {
            state.currQuestion = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setQuestions, setOptions, setName, setCurrQuestion, setLoading, setError } = questionSlice.actions

export default questionSlice.reducer
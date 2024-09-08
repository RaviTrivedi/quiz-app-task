import { createSlice } from '@reduxjs/toolkit'
import { ResultState } from '../../types'

const initialState: ResultState = {
    questionServed: 0,
    correctQuestions: 0,
    incorrectQuestions: 0
}

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setQuestionServed: (state, action) => {
            state.questionServed = action.payload
        },
        setCorrectQuestions: (state, action) => {
            state.correctQuestions = action.payload
        },
        setIncorrectQuestions: (state, action) => {
            state.incorrectQuestions = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setQuestionServed, setCorrectQuestions, setIncorrectQuestions } = resultSlice.actions

export default resultSlice.reducer
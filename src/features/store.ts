import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../features/question/questionSlice'
import resultReducer from '../features/result/resultSlice'

export const store = configureStore({
    reducer: {
        question: questionReducer,
        result: resultReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
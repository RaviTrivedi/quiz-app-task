import axios from "axios";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setOptions, setQuestions } from "../features/question/questionSlice";
import { RootState } from "../features/store";

const useFetch = (URL: String) => {

    const dispatch = useDispatch()
    const { currQuestion } = useSelector((state: RootState) => state.question)

    useEffect(() => {
        const fetchData = async () => {
            dispatch(setLoading(true))
            try {
                const response = await axios.get(`${URL}`)
                if (response.status === 200) {
                    dispatch(setQuestions(response.data?.results))
                    dispatch(setOptions(
                        response.data?.results &&
                        handleSuffle([
                            String(response.data?.results[currQuestion]?.correct_answer),
                            ...(response.data?.results[currQuestion]?.incorrect_answers ?? [])])
                    ))
                }
                dispatch(setLoading(false))
            } catch (error: unknown) {
                if (error instanceof Error) {
                    dispatch(setError(error?.message))
                } else {
                    dispatch(setError("An unknown error occurred"))
                }
                dispatch(setLoading(false))
            }
        }
        fetchData()
    }, [URL])

    const handleSuffle = (options: string[]) => {
        return options.sort(() => Math.random() - 0.5)
    }
}

export default useFetch
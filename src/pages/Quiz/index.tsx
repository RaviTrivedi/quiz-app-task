import { useSelector } from "react-redux"
import { RootState } from "../../features/store";
import { Box, Container, Paper, Typography } from "@mui/material";
import LoaderComponent from "../../components/Loader";
import Question from "../Question";
import useFetch from "../../hooks/useFetch";

const URL = "https://opentdb.com/api.php?amount=5";
const Quiz = () => {

    const { name, questions } = useSelector((state: RootState) => state.question)

    // useFetch custom hook
    useFetch(URL)
    return (
        <>
            <Container component={Box} margin={3}>
                <Paper component={Box} px={3} py={1}>
                    <Typography variant="h2" align="center">Welcome to the Quiz {name}!</Typography>
                    {
                        questions ?
                            <Question /> :
                            <LoaderComponent />
                    }
                </Paper>
            </Container>
        </>

    )
}

export default Quiz
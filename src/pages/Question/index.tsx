import { Container, Grid2, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from "react-router-dom";
import { setCurrQuestion, setOptions } from "../../features/question/questionSlice";
import LoaderComponent from "../../components/Loader";
import { setCorrectQuestions, setIncorrectQuestions, setQuestionServed } from "../../features/result/resultSlice";
import ButtonComponent from "../../components/Button";
import "./style.css"

const Question = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { questions, currQuestion, options, loading } = useSelector((state: RootState) => state.question)
    const correct_answer = questions[currQuestion]?.correct_answer
    const { correctQuestions, incorrectQuestions, questionServed } = useSelector((state: RootState) => state.result)

    useEffect(() => {
        dispatch(setOptions(
            questions &&
            handleSuffle([
                String(questions[currQuestion]?.correct_answer),
                ...(questions[currQuestion]?.incorrect_answers ?? [])])
        ))
    }, [currQuestion])

    const handleSuffle = (options: string[]) => {
        return options.sort(() => Math.random() - 0.5)
    }

    const [selected, setSelected] = useState<string>("");

    const handleClick = (selectedAns: string) => {
        setSelected(selectedAns)
    }

    // Function to determine the button color based on the selected and correct answer
    const getButtonColor = (option: string): "success" | "error" | "primary" => {
        if (option === selected && selected === correct_answer) {
            return "success"; // Green if correct
        } else if (option === selected && selected !== correct_answer) {
            return "error"; // Red if incorrect
        } else if (selected !== "" && option !== selected && option === correct_answer) {
            return "success"
        } else {
            return "primary"; // Default color
        }
    };

    // Function to determine if a button should be disabled
    const isButtonDisabled = (option: string): boolean => {
        // Disable other options except the selected one after an option is chosen
        return selected !== "" && option !== selected;
    };

    const handleNext = () => {
        if (currQuestion >= 9) {
            navigate("/result")
        }
        if (selected === correct_answer) {
            dispatch(setCorrectQuestions(correctQuestions + 1))
        } else {
            dispatch(setIncorrectQuestions(incorrectQuestions + 1))
        }
        dispatch(setQuestionServed(questionServed + 1))
        dispatch(setCurrQuestion(currQuestion + 1))
        setSelected("")
    }

    const decodeHtmlEntities = (str: string | null | undefined) => {
        return str?.replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&#39;/g, "'")
            .replace(/&#039;/g, "'")
            .replace(/&lsquo;/g, "'")
            .replace(/&rsquo;/g, "'")
            .replace(/&amp;/g, '&');
    };

    if (loading) return <LoaderComponent />

    return (
        <>
            <Typography variant="h4" margin={3} align="center">Question {currQuestion + 1}</Typography>
            <Typography variant="h4" margin={1} align="center">
                {decodeHtmlEntities(`${questions[currQuestion]?.question}`)}
            </Typography>
            <Grid2 container spacing={2} margin={3}>
                {
                    options && options?.map((option: string) => {
                        return <Grid2 size={{ xs: 12, md: 8, sm: 6, lg: 6 }} key={option}>
                            <ButtonComponent
                                key={option}
                                variant="outlined"
                                fullWidth
                                color={getButtonColor(option)}
                                sx={{
                                    textTransform: 'none', // Prevents uppercase text
                                    fontSize: '1.1rem',     // Slightly larger font
                                    padding: '12px 16px',   // Padding to make it look like a quiz option
                                }}
                                disabled={isButtonDisabled(option)}
                                onClick={() => handleClick(option)}
                                endIcon={getButtonColor(option) === "success" ? <CheckCircleIcon /> :
                                    getButtonColor(option) === "error" && <CancelIcon />
                                }
                                text={decodeHtmlEntities(option)}
                            />
                        </Grid2>
                    })
                }
            </Grid2>
            <Container>
                {selected !== "" && selected !== correct_answer && (
                    <Typography variant="h6" color="success.main" sx={{ marginY: 2 }}>
                        Correct Answer: {decodeHtmlEntities(correct_answer)}
                    </Typography>
                )}
                <ButtonComponent
                    color="secondary"
                    variant="contained"
                    disabled={!selected}
                    onClick={handleNext}
                    text={currQuestion >= 9 ? "Finish Quiz" : "Next Question"}
                />
            </Container>
        </>
    )
}

export default Question
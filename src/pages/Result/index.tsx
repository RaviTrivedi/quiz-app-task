import { useSelector } from "react-redux"
import { RootState } from "../../features/store"
import { Typography } from "@mui/material"
import { useWindowSize } from 'react-use';
import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";

const Result = () => {

    const { width, height } = useWindowSize();
    const { correctQuestions, incorrectQuestions, questionServed } = useSelector((state: RootState) => state.result)
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 10000);
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <>
            {showConfetti &&
                <ReactConfetti width={width} height={height} />
            }
            <Typography variant="h4" margin={3} align="center">
                Total Questions Served {questionServed}
            </Typography>
            <Typography variant="h4" margin={3} align="center">
                Total Correct Questions {correctQuestions}
            </Typography>
            <Typography variant="h4" margin={3} align="center">
                Total Incorrect Questions {incorrectQuestions}
            </Typography>
        </>
    )
}

export default Result
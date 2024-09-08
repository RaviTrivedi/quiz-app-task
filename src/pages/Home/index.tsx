import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import AlertComponent from "../../components/Alert"
import "./style.css"
import { useDispatch } from "react-redux"
import { setName } from "../../features/question/questionSlice"
import Input from "../../components/Input"
import ButtonComponent from "../../components/Button"

const Home = () => {

    const [formData, setFormData] = useState({ name: "", error: false });
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (!formData.name) {
            setFormData({
                ...formData,
                error: true
            })
            return;
        }
        dispatch(setName(formData?.name))
        navigate("/quiz")
    }

    const handleClose = () => {
        setFormData((prev) => ({ ...prev, error: false }))
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setFormData({ name: e.target.value, error: false });
        }
    }

    return (
        <section className="home_container">
            <h1 className="app_name_title">
                Trivia game
            </h1>
            <img src="/quiz.svg" alt="quiz_img" className="banner" />
            <pre></pre>
            {formData.error &&
                (
                    <div className="name_error">
                        <AlertComponent
                            severity="error"
                            message="Please Enter Your Name"
                            handleClose={handleClose}
                        />
                    </div>
                )}
            <Input
                id="outlined-basic"
                label="Enter Your Name"
                variant="outlined"
                onChange={handleNameChange}
                value={formData.name}
            />
            <pre></pre>
            <ButtonComponent
                variant="contained"
                size="large"
                onClick={handleSubmit}
                text="Start Quiz"
            />
        </section>
    )
}

export default Home
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css'
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

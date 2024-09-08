export type result = {
    type: String;
    difficulty: String;
    category: String;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
} | null | undefined

export interface QuestionState {
    name: string,
    questions: result[],
    options: string[] | null,
    currQuestion: number,
    loading: boolean,
    error: string
}

export interface ResultState {
    questionServed: number,
    correctQuestions: number,
    incorrectQuestions: number,
}
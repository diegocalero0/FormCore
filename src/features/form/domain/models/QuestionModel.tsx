export interface AnswerModel {
    answerId: string,
    answer: string
}

export interface QuestionModel {
    questionId: string,
    question: string,
    answers: AnswerModel[],
    selectedAnswer: AnswerModel | null
}
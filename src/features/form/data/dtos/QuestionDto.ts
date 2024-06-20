export interface AnswerDto {
    answer_id: string,
    answer: string
}

export interface QuestionDto {
    question_id: string,
    question: string,
    answers: AnswerDto[]
}
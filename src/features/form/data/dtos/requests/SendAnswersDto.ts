export interface SendAnswersDto {
    date: string,
    data: AnsweredQuestionDto[]
}

export interface AnsweredQuestionDto {
    question_id: string,
    answer_id: string
}
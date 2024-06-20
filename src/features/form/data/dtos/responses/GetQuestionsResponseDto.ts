import { QuestionDto } from "../QuestionDto"

export interface GetQuestionsResponseDto {
    date: string,
    data: QuestionDto[]
}
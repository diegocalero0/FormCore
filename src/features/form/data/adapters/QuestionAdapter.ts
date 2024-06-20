import { AnswerModel, QuestionModel } from "../../domain/models/QuestionModel";
import { AnswerDto, QuestionDto } from "../dtos/QuestionDto";

/**
 * Function that transforms a [AnswerDto] into [AnswerModel]
 * @param answerDto the dto to be converted into model
 * @returns the [AnswerModel] created using answerDto
 */
export const answerModelFromDto = (answerDto: AnswerDto) => {
    const answerModel: AnswerModel = {
        answerId: answerDto.answer_id,
        answer: answerDto.answer
    } 
    return answerModel
}

/**
 * Function that transforms a [QuestionDto] into [QuestionModel]
 * @param questionDto the dto to be converted into model
 * @returns the [QuestionModel] created using questionDto
 */
export const questionModelFromDto = (questionDto: QuestionDto) => {
    const questionModel: QuestionModel = {
        questionId: questionDto.question_id,
        question: questionDto.question,
        answers: questionDto.answers.map<AnswerModel>(answerDto => answerModelFromDto(answerDto)),
        selectedAnswer: null
    }
    return questionModel
}
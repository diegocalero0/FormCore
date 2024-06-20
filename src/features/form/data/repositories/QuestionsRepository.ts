import { QuestionModel } from "../../domain/models/QuestionModel";
import { TeamCoreApi } from "../../../../api/TeamCoreApi"
import { questionModelFromDto } from "../adapters/QuestionAdapter";
import { AnsweredQuestionDto, SendAnswersDto } from "../dtos/requests/SendAnswersDto";
import { DateUtils } from "../../../../util/date/DateUtils";

export const QuestionsRepository = {
    getQuestions(): Promise<QuestionModel[]> {
        return new Promise<QuestionModel[]>(async (resolve, reject) => {
            try {
                const responseDto = await TeamCoreApi.fetchQuestions()
                const questions = responseDto.data.map(questionDto => questionModelFromDto(questionDto))
                resolve(questions)
            } catch(error) {
                reject(error)
            }
        })
    },
    sendAnswers(questionsWithAnswers: QuestionModel[]): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const request: SendAnswersDto = {
                    date: DateUtils.getCurrentISODateString(),
                    data: questionsWithAnswers.map<AnsweredQuestionDto>((answeredQuestion) => {
                        const dto: AnsweredQuestionDto = {
                            question_id: answeredQuestion.questionId,
                            answer_id: answeredQuestion.selectedAnswer?.answerId ?? ""
                        }
                        return dto
                    })
                }
                await TeamCoreApi.sendAnswers(request)
                resolve(true)
            } catch(error) {
                reject(error)
            }
        })
    }
}
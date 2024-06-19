import { QuestionModel } from "../../domain/models/QuestionModel";
import { fetchQuestions } from "../../../../api/TeamCoreApi"
import { questionModelFromDto } from "../adapters/QuestionAdapter";

export class QuestionsRepository {
    getQuestions(): Promise<QuestionModel[]> {
        return new Promise<QuestionModel[]>(async (resolve, reject) => {
            try {
                const responseDto = await fetchQuestions()
                const questions = responseDto.data.map(questionDto => questionModelFromDto(questionDto))
                resolve(questions)
            } catch(error) {
                reject(error)
            }
        })
    }
}


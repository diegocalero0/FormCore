import { TEAMCORE_API_TOKEN, TEAMCORE_API_URL } from "react-native-dotenv"
import axios, { AxiosResponse } from "axios"
import { GetQuestionsResponseDto } from "../features/form/data/dtos/responses/GetQuestionsResponseDto"
import { SendAnswersDto } from "../features/form/data/dtos/requests/SendAnswersDto"

const teamCoreAxiosInstance = axios.create({
    baseURL: TEAMCORE_API_URL,
    headers: {
        Authorization: `Bearer ${TEAMCORE_API_TOKEN}`
    }
})

export const TeamCoreApi = {
    fetchQuestions(): Promise<GetQuestionsResponseDto> {
        return new Promise<GetQuestionsResponseDto>(async (resolve, reject) => {
            try {
                const response: AxiosResponse<GetQuestionsResponseDto> = await teamCoreAxiosInstance.get("/questions")
                resolve(response.data)
            } catch(error) {
                reject(error)
            }
        })
    },
    sendAnswers(sendAnswersDto: SendAnswersDto): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const response = await teamCoreAxiosInstance.post("/answer", sendAnswersDto)
                if(response.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            } catch(error) {
                reject(error)
            }
        })
    }
}
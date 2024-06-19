import { TEAMCORE_API_TOKEN, TEAMCORE_API_URL } from "@env"
import axios, { AxiosResponse } from "axios"
import { GetQuestionsResponseDto } from "../features/form/data/dtos/responses/GetQuestionsResponseDto"

const teamCoreApi = axios.create({
    baseURL: TEAMCORE_API_URL,
    headers: {
        Authorization: `Bearer ${TEAMCORE_API_TOKEN}`
    }
})

export function fetchQuestions(): Promise<GetQuestionsResponseDto> {
    return new Promise<GetQuestionsResponseDto>(async (resolve, reject) => {
        try {
            const response: AxiosResponse<GetQuestionsResponseDto> = await teamCoreApi.get("/questions")
            resolve(response.data)
        } catch(error) {
            reject(error)
        }
    })
}
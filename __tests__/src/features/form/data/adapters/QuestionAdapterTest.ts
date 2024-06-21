import { AnswerDto, QuestionDto } from "../../../../../../src/features/form/data/dtos/QuestionDto"
import { answerModelFromDto, questionModelFromDto } from "../../../../../../src/features/form/data/adapters/QuestionAdapter"

it("answerModelFromDto Test", () => {
    const dto: AnswerDto = {
        answer: "2",
        answer_id: "1.a"
    }
    const model = answerModelFromDto(dto)
    expect(model.answer).toBe(dto.answer)
    expect(model.answerId).toBe(dto.answer_id)
})

it("questionModelFromDto Test", () => {

    const answerDto: AnswerDto = {
        answer: "2",
        answer_id: "1.a"
    }

    const questionDto: QuestionDto = {
        answers: [answerDto],
        question: "¿Cuanto es 2 + 2?",
        question_id: "1"
    }

    const model = questionModelFromDto(questionDto)

    expect(model.question).toBe(questionDto.question)
    expect(model.questionId).toBe(questionDto.question_id)
    expect(model.answers[0].answer).toBe(questionDto.answers[0].answer)
    expect(model.answers[0].answerId).toBe(questionDto.answers[0].answer_id)
})
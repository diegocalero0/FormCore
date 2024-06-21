import { TeamCoreApi } from "../../../../../../src/api/TeamCoreApi"
import { QuestionsRepository } from "../../../../../../src/features/form/data/repositories/QuestionsRepository"
import { QuestionModel } from "../../../../../../src/features/form/domain/models/QuestionModel";

jest.mock('../../../../../../src/api/TeamCoreApi');

describe("getQuestions Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Success", async () => {
        const mockQuestions = [{ questionId: '1', answers: [{ answer: "", answerId: "a1" }] }] as QuestionModel[];
        (TeamCoreApi.fetchQuestions as jest.Mock).mockResolvedValue({ data: mockQuestions });
        const result = await QuestionsRepository.getQuestions();
        expect(result).toHaveLength(1);
        expect(TeamCoreApi.fetchQuestions).toHaveBeenCalledTimes(1);
    })

    it("Empty Answers", async () => {
        expect.assertions(1);
        const mockQuestions = [{ questionId: '1' }] as QuestionModel[];
        (TeamCoreApi.fetchQuestions as jest.Mock).mockResolvedValue({ data: mockQuestions });

        try {
            const result = await QuestionsRepository.getQuestions();
        } catch (error) {
            expect(error).toBeDefined()
        }
    })
})

describe("sendAnswers Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Success", async () => {
        expect.assertions(0);
        const mockQuestions = [{ questionId: '1', answers: [{ answer: "", answerId: "a1" }] }] as QuestionModel[];
        (TeamCoreApi.sendAnswers as jest.Mock).mockResolvedValue({});
        try {
            await QuestionsRepository.sendAnswers(mockQuestions);
        } catch(error) {
            expect(error).toBeDefined()
        }
    })

    it("Empty Answers", async () => {
        expect.assertions(1);
        const mockQuestions = [{ questionId: '1', answers: [{ answer: "" }] }] as QuestionModel[];
        (TeamCoreApi.sendAnswers as jest.Mock).mockRejectedValue({});
        try {
            await QuestionsRepository.sendAnswers(mockQuestions);
        } catch(error) {
            expect(error).toBeDefined()
        }
    })
})
import create from 'zustand'

export type UserInfo = {
    firstName?: string, middleName?: string, lastName?: string,
    age?: number, gender?: string, race?: string, ethnicity?: string,
    mob?: string, dob?: number, yob?: number,
    height?: string, weight?: string, bloodType?: string, occupation?: string
    phoneNumber?: string, emailAddress?: string,
    addr1?: string, addr2?: string, city?: string, state?: string, zip?: string,
    ecFirstName?: string, ecMiddleName?: string, ecLastName?: string, ecPhoneNumber?: string
}

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    BONE = 'bone',
    CORNEA = 'cornea'
}

export enum SurveyQuestionStatus {
    UNSELECTED = 0,
    YES = 1,
    NO = 2
}

export enum SurveyQuestionType {
    HEADING = 0,
    SUBHEADING = 1,
    CHECKBOX = 2,
}

export type SurveyQuestionPartial = {
    text: string,
    value: number,
    type?: SurveyQuestionType,
    section?: number
}

export type SurveyQuestion = {
    text: string,
    value: number,
    status: SurveyQuestionStatus,
    type?: SurveyQuestionType,
    section?: number
}

type StoreType = {
    userInfo: UserInfo,
    updateUserInfo: (newUserInfo: UserInfo) => void
    clearUserInfo: () => void,
    organForSale?: Organ,
    updateOrganForSale: (newOrgan: Organ) => void
    clearOrganForSale: () => void,
    surveyAnswers: Map<number, SurveyQuestion>,
    updateSurveyAnswers: (newSurveyAnswers: Map<number, SurveyQuestion>) => void,
    clearSurveyAnswers: () => void,
    clearState: () => void
}
const useStore = create<StoreType>(set => ({
    userInfo: {},
    updateUserInfo: (newUserInfo) => set(state => ({ userInfo: newUserInfo})),
    clearUserInfo: () => set(state => ({ userInfo: {} })),
    organForSale: undefined,
    updateOrganForSale: (newOrgan) => set(state => ({ organForSale: newOrgan})),
    clearOrganForSale: () => set(state => ({ organForSale: undefined })),
    surveyAnswers: new Map(),
    updateSurveyAnswers: (newSurveyAnswers: Map<number, SurveyQuestion>) => set(
        state => ({ surveyAnswers:  newSurveyAnswers })
    ),
    clearSurveyAnswers: () => set(state => ({ surveyAnswers: new Map() })),
    clearState: () => set(state => ({
        userInfo: {},
        organForSale: undefined,
        surveyAnswers: new Map()
    }))
}))

export default useStore

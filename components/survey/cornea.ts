import { SurveyQuestionStatus, SurveyQuestionPartial, SurveyQuestion, SurveyQuestionType } from "store"

const INELIGABLE = -1_000_000_000

const corneaSurveyQuestions: SurveyQuestionPartial[] = [
    { text: 'Are you in good health?', value: INELIGABLE },
    { text: 'Do you have an infection now, or are you currently taking antibiotics?', value: INELIGABLE },
    { text: 'Have you ever had problems with general or regional anesthesia?', value: INELIGABLE },
    { text: 'In the past 12 months, have you needed treatment in an emergency room, been hospitalized, or had surgery?', value: INELIGABLE },
    { text: 'In the past 12 months, have you had an eye exam?', value: 0 },
    { text: 'If yes, have you been told that you had major corneal problems?', value: INELIGABLE },
    { text: 'Do you wear glasses or contact lenses?', value: 0 },
    { text: 'Do you have lazy eye/amblyopia?', value: -200 },
    { text: 'Do you have glaucoma?', value:	-300 },
    { text: 'Do you have cataracts?', value:	-300 },
    { text: 'Do you or have you had eye tumors that did not result in corneal damage?', value:	-500 },
    { text: 'In the past 12 months, have you sustained any severe eye injuries?', value: INELIGABLE },
    { text: 'Have you had laser eye surgery?', value:	-500 },
    { text: 'Do you have macular degeneration?', value: INELIGABLE },
    { text: 'Do you have retina disease?', value: INELIGABLE },
    { text: 'Do you have colorblindness?', value: INELIGABLE },
    { text: 'Do you have a family history of glaucoma?', value:	-300 },
    { text: 'Do you have a family history of macular degeneration?', value:	-300 },
    { text: 'Do you currently have problems with flashes or floaters?', value:	-200 },
    { text: 'Do you currently have problems with loss of vision?', value: INELIGABLE },
    { text: 'Do you currently have problems with double vision?', value:	-300 },
    { text: 'Do you currently have problems with itching of eyes?', value:	-300 },
    { text: 'Do you currently have problems with sandy or gritty eyes?', value:	-300 },
    { text: 'Do you currently have problems with dry eyes?', value:	-300 },
    { text: 'Do you currently have problems with excess watering of eyes?', value:	-500 },
    { text: 'Do you currently have problems with light sensitivity?', value:	-500 },
    { text: 'Do you currently have problems with eye redness?', value:	-500 },
    { text: 'Do you currently have problems with eye pain?', value: 0 },
    { text: 'Do you drive?', value: 0 },
    { text: 'Do you use tobacco products?', value: 0 },
    { text: 'Do you drink alcohol?', value: 0 },
    { text: 'Have you ever had problems with general or regional anesthesia?', value: INELIGABLE },
    { text: 'Have you ever been told that you have high blood pressure?', value: 0 },
    { text: 'Do you take medication for high blood pressure?', value: 0 },
    { text: 'Have you been told that you have diabetes, prediabetes, or high blood sugar?', value: 0 },
    { text: 'Do you take medications for diabetes?', value: 0 },
    { text: 'Have you ever had cancer?', value: 0 },
    { text: 'Have you ever had any heart disease?', value: 0 },
    { text: 'Do you have a family history of coronary artery disease?', value: 0 },
    { text: 'Have you ever had a heart attack?', value: 0 },
    { text: 'Have you ever had a stroke?', value: 0 },
    { text: 'Have you ever had a bleeding or clotting disorder?', value: 0 },
]

const corneaSurvey = new Map<number, SurveyQuestion>(
    corneaSurveyQuestions.map((q, idx) =>
    [idx, { ...q, status: SurveyQuestionStatus.UNSELECTED}]
))

export default corneaSurvey

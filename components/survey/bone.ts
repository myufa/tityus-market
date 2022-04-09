import { SurveyQuestionStatus, SurveyQuestionPartial, SurveyQuestion, SurveyQuestionType } from "store"

const INELIGABLE = -1_000_000_000

const boneSurveyQuestions: SurveyQuestionPartial[] = [
{ text: 'Are you in good health?', value: INELIGABLE },
{ text: 'Do you have an infection now, or are you currently taking antibiotics?', value: INELIGABLE },
{ text: 'In the past 12 months, have you needed treatment in an emergency room, been hospitalized, or had surgery?', value: INELIGABLE },
{ text: 'In the past 12 months, have you received a blood transfusion or tissue transplant, such as cornea or bone?', value: INELIGABLE },
{ text: 'Have you ever had a blood transfusion from a source other than your own blood?', value: INELIGABLE },
{ text: 'Do you plan to or is there any chance that you will become pregnant within the next 6 months?', value: INELIGABLE },
{ text: 'In the past 6 weeks, have you been pregnant or are you now pregnant?', value: INELIGABLE },
{ text: 'Have you had any health problems associated with or caused by pregnancy?', value: INELIGABLE },
{ text: 'Have you ever received an organ, bone marrow, or stem cell transplant or donated bone marrow, stem cells, or an organ, such as a kidney?', value: INELIGABLE },
{ text: 'Have you ever had problems with general or regional anesthesia?', value: INELIGABLE },
{ text: 'Do you have any food, drug, latex or environmental allergies?', value: INELIGABLE },
{ text: 'Have you ever had neck, back, hip, or spine problems?', value: INELIGABLE },
{ text: 'Have you ever had breathing problems, including asthma, sleep apnea, or shortness of breath?', value: INELIGABLE },
{ text: 'Have you ever had a stroke, heart attack, heart-related chest pains, heart disease, or heart surgery?', value: INELIGABLE },
{ text: 'Have you ever had cancer, including leukemia?', value: INELIGABLE },
{ text: 'Have you ever had a parasitic blood disease, such as leishmaniasis or babesiosis?', value: INELIGABLE },
{ text: 'In the past 4 weeks, have you had any vaccinations (other than smallpox) or any kind of shot?', value: INELIGABLE },
{ text: 'Are you planning to receive any vaccinations (including smallpox) or shots?', value: INELIGABLE },
{ text: 'Have you ever tested positive for syphilis, including screening tests, or ever been treated for syphilis?', value: INELIGABLE },
{ text: 'In the past 4 months, have you had a positive test for West Nile Virus?', value: INELIGABLE },
{ text: 'In the past 3 years, have you had malaria?', value: INELIGABLE },
{ text: 'In the past 8 weeks, have you received a smallpox vaccination?', value: INELIGABLE },
{ text: 'If yes, did you have any illness or complications due to the vaccination such as an eye infection or a rash, an allergic reaction, sores away from the vaccination site?', value: INELIGABLE },
{ text: 'Have you been diagnosed with Creutzfeldt - Jakob disease (CJD) or variant CJD?', value: INELIGABLE },
{ text: 'Have any of your blood relatives been diagnosed with Creutzfeldt - Jakob disease or have you been told that your family has an increased risk for this disease?', value: INELIGABLE },
{ text: 'Do you have a degenerative neurological condition such as dementia or any other disease of the central nervous system where the cause is unknown?', value: INELIGABLE },
{ text: 'Have you ever had a dura mater (or brain covering) transplant for a head or brain injury?', value: INELIGABLE },
{ text: 'Have you ever received growth hormone made from human pituitary glands?', value: INELIGABLE },
{ text: 'Have you ever had Chagas disease or any positive tests for Chagas or T. cruzi, including screening tests?', value: INELIGABLE },
{ text: 'Do you have HIV or AIDS or have you ever tested positive for the HIV virus, including screening tests?', value: INELIGABLE },
{ text: 'Have you ever had a bleeding problem, such as hemophilia or other clotting factor deficiency, or have you received human-derived clotting factor concentrates?', value: INELIGABLE },
{ text: 'Have you ever tested positive for HTLV (Human T-lymphotropic virus), including screening tests?', value: INELIGABLE },
{ text: 'Have you ever tested positive for hepatitis, including screening tests, or have you ever had yellow jaundice, liver disease, or hepatitis since the age of 11 years?', value: INELIGABLE },
{ text: 'Have you ever tested positive for syphilis, including screening tests, or ever been treated for syphilis?', value: INELIGABLE },
{ text: 'Have you, any of your sexual partners, or any members of your household ever had a medical procedure that involved being exposed to live cells, tissues, or organs from an animal?', value: INELIGABLE },
{ text: 'In the past 12 months, have you had a tattoo?', value: -300 },
{ text: 'In the past 12 months, have you had an ear, skin, or body piercing using shared instruments or needles?', value: -300 },
{ text: 'In the past 12 months, have you had an accidental needle stick or have you come into contact with someone else\'s blood through an open wound, non-intact skin?', value: INELIGABLE },
{ text: 'In the past 12 months, have you lived with or had sexual contact with anyone having yellow jaundice, hepatitis, or have you received Hepatitis B Immune Globulin (HBIG)?', value: INELIGABLE },
{ text: 'In the past 12 months, have you had sex, even once, with anyone who has used a needle to take drugs, steroids, or anything else not prescribed by a doctor in the past 5 years?', value: -500 },
{ text: 'In the past 12 months, have you given money, drugs, or other payment for sex OR have you had sex, even once, with anyone who has taken money, drugs or other payment in exchange for sex in the past 5 years?', value: INELIGABLE },
{ text: 'In the past 12 months, have you had sex, even once, with anyone who has HIV or AIDS or tested positive for the HIV virus?', value: INELIGABLE },
{ text: 'In the past 12 months, have you been held in a jail, prison, juvenile detention, or lockup for more than 72 continuous hours?', value: -500  },
{ text: 'FEMALE DONORS ONLY: In the past 12 months, have you had sex with a male who has had sex, even once, with another male in the past 5 years?', value: -300 },
{ text: 'MALE DONORS ONLY: In the past 5 years, have you had sex, even once, with another male?', value: -300 },
{ text: 'In the past 5 years, have you taken money, drugs, or other payment in exchange for sex?', value: INELIGABLE },
{ text: 'In the past 5 years, have you used a needle, even once, to take drugs, steroids, or anything else not prescribed by a doctor?', value: -500 },
]

const boneSurvey = new Map<number, SurveyQuestion>(
    boneSurveyQuestions.map((q, idx) =>
    [idx, { ...q, status: SurveyQuestionStatus.UNSELECTED}]
))

export default boneSurvey

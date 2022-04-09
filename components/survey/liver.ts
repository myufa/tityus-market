import { SurveyQuestionStatus, SurveyQuestionPartial, SurveyQuestion, SurveyQuestionType } from "store"

const INELIGABLE = -1_000_000_000
const liverSurveyQuestions: SurveyQuestionPartial[] = [
    { text: 'Are you in good health?', value: INELIGABLE },
    { text: 'Do you have an infection now, or are you currently taking antibiotics?	', value: INELIGABLE },
    { text: 'In the past 12 months, have you needed treatment in an emergency room, been hospitalized, or had surgery?	', value: INELIGABLE },
    { text: 'Have you ever had problems with general or regional anesthesia?	', value: INELIGABLE },
    { text: 'Have you ever been told that you have high blood pressure?	', value: INELIGABLE },
    { text: 'Do you take medication for high blood pressure?	', value: INELIGABLE },
    { text: 'Have you been told that you have diabetes, prediabetes, or high blood sugar?	', value: INELIGABLE },
    { text: 'Do you take medications for diabetes?	', value: INELIGABLE },
    { text: 'If female, did you have diabetes during pregnancy?	', value: INELIGABLE },
    { text: 'Have you ever had chronic liver damage?	', value: INELIGABLE },
    { text: 'Have you ever had hepatitis?	', value: INELIGABLE },
    { text: 'Have you ever had hemochromatosis?	', value: INELIGABLE },
    { text: 'Do you have fattly liver disease?	', value: INELIGABLE },
    { text: 'Have you ever been told you had skin and eyes that appear yellowish or had other liver problems?	', value: INELIGABLE },
    { text: 'Have you ever had cancer?	', value: INELIGABLE },
    { text: 'Have you ever had any heart disease?	', value: INELIGABLE },
    { text: 'Do you have a family history of coronary artery disease?', value: INELIGABLE },
    { text: 'Have you ever had a heart attack?	', value: INELIGABLE },
    { text: 'Have you ever had a stroke?	', value: INELIGABLE },
    { text: 'Have you ever had a bleeding or clotting disorder?', value: INELIGABLE },
    { text: 'Have you ever had kidney stones?', value: INELIGABLE },
    { text: 'Have you ever had HIV?	', value: INELIGABLE },
    { text: 'Have you ever had an autoimmune disease, such as Gout, Rheumatoid Arthritis, or Lupus?', value: INELIGABLE },
    { text: 'Have you ever had breathing problems?	', value: INELIGABLE },
    { text: 'Have you had gastric bypass, Roux en Y, duodenal switch, or gastric sleeve surgery?', value: INELIGABLE },
    { text: 'Do you have pain for which you take pain medication more than two times per week?', value: -1_000 },
    { text: 'In the past 12 months, have you had a tattoo?', value: -1_000 },
    { text: 'In the past 12 months, have you had an ear, skin, or body piercing using shared instruments or needles?', value: -3_000 },
    { text: 'In the past 12 months, have you had an accidental needle stick or have you come into contact with someone else\'s blood through an open wound, non-intact skin?	', value: INELIGABLE },
    { text: 'In the past 12 months, have you lived with or had sexual contact with anyone having yellow jaundice, hepatitis, or have you received Hepatitis B Immune Globulin (HBIG)?	', value: INELIGABLE },
    { text: 'In the past 12 months, have you been held in a jail, prison, juvenile detention, or lockup for more than 72 continuous hours', value: -5_000 },
{ type: SurveyQuestionType.HEADING, text: 'Have you ever been diagnosed by a doctor, therapist or counselor with one of the following conditions?', value: 1},
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Please check all that apply.', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Major depression or major depressive disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Panic disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Posttraumatic stress disorder (PTSD)', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Generalized anxiety disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Obsessive-compulsive disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Bipolar disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Schizophrenia', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Schizoaffective disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Borderline personality disorder', value: 1 },
{ section: 0, type: SurveyQuestionType.CHECKBOX, text: 'Antisocial personality disorder', value: 1 },
// "		"<2= -$1000
// 3-5= -$3000
// 6-9=-$5000
// 10=-$8000"
    { text: 'Have you ever had to stay in a hospital overnight for 1 or more days because of a mental health condition (such as for depression, bipolar disorder, etc.)?', value: -2_000 },
    { text: 'Have you ever been committed for acts of harming yourseld or attempted suicide?', value: -2_000 },
    { text: 'Have you ever had thoughts of harming yourself or attempted suicide?', value: -5_000 },
    { text: 'Have you ever had a problem with or concern about your alcohol use?', value: -5_000 },
    { text: 'Have you ever had a problem with or concern about your drug use?', value: -5_000 },
    { text: 'Do you currently use marijuana (either for recreational or medical purposes)?', value: -2_000 },
    { text: 'Do you use tobacco (any type: chewing, vapor, e-cigarette, and/or cigarette)?', value: -5_000 },
{ type: SurveyQuestionType.HEADING, text: 'Have you used any of the following drugs in the last year? Please check all that apply.', value: 1},
{ section: 1, type: SurveyQuestionType.CHECKBOX, text: 'Amphetamines or methamphetamine', value: 1},
{ section: 1, type: SurveyQuestionType.CHECKBOX, text: 'Cocaine or crack', value: 1},
{ section: 1, type: SurveyQuestionType.CHECKBOX, text: 'Heroine (either snorthing or by injecting)', value: 1},
{ section: 1, type: SurveyQuestionType.CHECKBOX, text: 'Synthetic cannabinoids', value: 1},
{ section: 1, type: SurveyQuestionType.CHECKBOX, text: 'Narcotics (Oxycodone, Oxycontin, Fentanyl, Dilaudid, Vicodin) not prescribed by a doctor', value: 1},
{ section: 1, type: SurveyQuestionType.CHECKBOX, text: 'Have not used any of these drugs in the last year', value: 1},
// "		ineligible
{ type: SurveyQuestionType.HEADING, text: 'Are you taking, or have you taken in the past, any of the following antidepressant medications?', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Fluoxetine (Prozac)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Paroxetine (Paxil)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Sertraline (Zoloft)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Citalopram (Celexa)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Escitalopram (Lexapro)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Fluvoxamine (Luvox)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Venlafaxine (Effexor)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Duloxetine (Cymbalta)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Bupropion (Wellbutrin)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Mirtazapine (Remeron)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Nefazodone (Serzone)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Clomipramine (Anafranil)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Nortriptyline (Pamelor)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Phenelzine (Nardil)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Tranylcypromine (Parnate)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Vortioxetine (Brintellix)', value: 1 },
{ section: 2, type: SurveyQuestionType.CHECKBOX, text: 'Desvenlafaxine (Pristiq)', value: 1 },
// None of the above
// "		"<5= -$1000
// 6-10= -$3000
// 11-15=-$5000
// 16-17=-$8000"
{ type: SurveyQuestionType.HEADING, text: 'Are you taking, or have you taken in the past, any of the following mood stabilizing medications?', value: 1 },
{ section: 3, type: SurveyQuestionType.CHECKBOX, text: 'Lithium', value: 1 },
{ section: 3, type: SurveyQuestionType.CHECKBOX, text: 'Valproic Acid (Depakote, Divalproex)', value: 1 },
{ section: 3, type: SurveyQuestionType.CHECKBOX, text: 'Lamotrigine (Lamictal)', value: 1 },
{ section: 3, type: SurveyQuestionType.CHECKBOX, text: 'Carbamazepine (Tegretol)', value: 1 },
{ section: 3, type: SurveyQuestionType.CHECKBOX, text: 'Oxcarbazepine (Trileptal)', value: 1 },
// "		"all options
// =-$2000"
{ type: SurveyQuestionType.HEADING, text: 'Are you taking, or have you taken in the past, any of the following antipsychotic medications?', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Quetiapine (Seroquel)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Risperidone (Risperdal)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Olanzapine (Zyprexa)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Aripiprazole (Abilify)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Ziprasidone (Geodon)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Lurasidone (Latuda)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Clozapine (Clozaril)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Paliperidone (Invega)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Haloperidol (Haldol)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Fluphenazine (Prolixin)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Perphenazine (Trilafon)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Thioridazine (Mellaril)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Chlorpromazine (Thorazine)', value: 1 },
{ section: 4, type: SurveyQuestionType.CHECKBOX, text: 'Thiothixene (Navane)', value: 1 },
// None of the above"		"<3= -$1000
// 4-6= -$3000
// 711=-$5000
// 12-14=-$8000"
{ type: SurveyQuestionType.HEADING, text: 'Are you currently taking any of the following medications at least once per day?', value: 1 },
{ section: 5, type: SurveyQuestionType.CHECKBOX, text: 'Alprazolam (Xanax)', value: 1 },
{ section: 5, type: SurveyQuestionType.CHECKBOX, text: 'Clonazepam (Klonopin)', value: 1 },
{ section: 5, type: SurveyQuestionType.CHECKBOX, text: 'Diazepam (Valium)', value: 1 },
{ section: 5, type: SurveyQuestionType.CHECKBOX, text: 'Lorazepam (Ativan)', value: 1 },
{ section: 5, type: SurveyQuestionType.CHECKBOX, text: 'Chlordiazepoxide (Librium)', value: 1 },
{ section: 5, type: SurveyQuestionType.CHECKBOX, text: 'Oxazepam (Serax)', value: 1 },
// None of the above"		"<2= -$1000
// 3-5= -$3000
// 6=-$5000"
]

const liverSurvey = new Map<number, SurveyQuestion>(
    liverSurveyQuestions.map((q, idx) =>
    [idx, { ...q, status: SurveyQuestionStatus.UNSELECTED}]
))

export default liverSurvey

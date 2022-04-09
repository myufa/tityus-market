import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import CountUp from 'react-countup'

import Flex from 'components/common/flex'
import HomeButtonHeader from 'components/common/home-button-header'
import SurveyButton from 'components/survey/survey-button'
import AllSetScreen from 'components/survey/all-set'
import { useEffect, useState } from 'react'
import useStore, { Organ, SurveyQuestion, SurveyQuestionStatus } from 'store'
import InelligeableScreen from 'components/survey/inelligeable'
import dynamic from 'next/dynamic'

const INELIGABLE = -1_000_000_000

const sumSection = (section: SurveyQuestion[]) => section.reduce((acc, q) => acc + (q.status === SurveyQuestionStatus.YES ? q.value : 0), 0)
const calculateSectionsLoss = (organ: Organ, qs: [number, SurveyQuestion][]) => {
    if (![Organ.KIDNEY, Organ.LIVER].includes(organ)) return 0

    let loss = 0
    const sections = qs.reduce<{[key: number]: SurveyQuestion[]}>((acc, [_, q]) => {
        if (q.section === undefined) return acc
        return { ...acc, [q.section]: [...(acc?.[q.section] || []), q] }
    }, {})
    console.log('sections', sections)
    const section0Sum = sumSection(sections[0])
    if (section0Sum < 2) loss += -1000
    if (section0Sum >= 3 && section0Sum <= 5) loss += -3000
    if (section0Sum >= 6 && section0Sum <= 9) loss += -5000
    if (section0Sum === 10) loss += -8000
    const section1Sum = sumSection(sections[1])
    console.log(sections[1], section1Sum)
    if (sections[1].find(item => item.text==='Have not used any of these drugs in the last year')?.status === SurveyQuestionStatus.YES) {
        console.log('no drugs')
        loss += 0
    } else if (section1Sum) {
        console.log('druuuuuuuugs')
        loss += INELIGABLE
    }
    const section2Sum = sumSection(sections[2])
    if (section2Sum <= 5) loss += -1000
    if (section2Sum >= 6 && section0Sum <= 10) loss += -3000
    if (section2Sum >= 11 && section0Sum <= 15) loss += -5000
    if (section2Sum >= 16 && section0Sum <= 17) loss += -8000
    const section3Sum = sumSection(sections[3])
    loss += section3Sum * -2000
    const section4Sum = sumSection(sections[4])
    if (section4Sum <= 3) loss += -1000
    if (section4Sum >= 4 && section0Sum <= 6) loss += -3000
    if (section4Sum >= 7 && section0Sum <= 11) loss += -5000
    if (section4Sum >= 12 && section0Sum <= 14) loss += -8000
    const section5Sum = sumSection(sections[5])
    if (section5Sum <= 2) loss += -1000
    if (section5Sum >= 3 && section0Sum <= 5) loss += -3000
    if (section5Sum === 6) loss += -5000
    return loss
}

const Heading = styled.h1`
    font-size: 180px;
    font-weight: bold;
    margin: 0;
`

const SubHeading = styled.h2`
    font-size: 22px;
`

const organPresenterMap: { [key: string]: string } = {
    [Organ.KIDNEY]: Organ.KIDNEY,
    [Organ.LIVER]: Organ.LIVER,
    [Organ.BONE]: 'bone marrow',
    [Organ.CORNEA]: Organ.CORNEA,
}

const randomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const organPriceMap: { [key: string]: {initial: number, min: number} } = {
    [Organ.KIDNEY]: {initial: randomInRange(26_000, 50_000), min: 25_000},
    [Organ.LIVER]: {initial: randomInRange(20_000, 40_000), min: 21_000},
    [Organ.BONE]: {initial: randomInRange(3_100, 7_000), min: 3_000},
    [Organ.CORNEA]: {initial: randomInRange(4_200, 8_000), min: 4_000},
}

const PriceEval = () => {
    const [accepted, setAccepted] = useState(false)
    const router = useRouter()
    const { organ } = router.query as { organ: Organ }

    const surveyAnswers = useStore(state => state.surveyAnswers)
    const valueLoss = [...surveyAnswers.values()].slice(1).reduce(
        (acc, q) => {
            return (q.status === SurveyQuestionStatus.YES
                    && q.type === undefined ? q.value : 0) + acc
        },
        0
    )

    const sectionLoss = calculateSectionsLoss(organ, [...surveyAnswers.entries()])
    console.log('sectionLoss', sectionLoss)
    const totalValue = organPriceMap[organ].initial + valueLoss + sectionLoss
    const inelligeable = totalValue < organPriceMap[organ].min

    useEffect(() => {
        if (!accepted) return
        const timeOutId = setTimeout(() => router.push('/home'), 5_000)
        return () => clearTimeout(timeOutId)
    }, [accepted])

    if (router.isFallback) {
        return <h1>Data is loading</h1>;
    }

    if (inelligeable) {
        const timeOutId = setTimeout(() => router.push('/home'), 5_000)
        return (
            <InelligeableScreen organ={organ} />
        )
    }

    if (accepted) {
        return (
            <AllSetScreen />
        )
    }

    return (
        <Flex column height={650}>
            <HomeButtonHeader />
            <Flex column center heightPct={80}>
                <Flex column alignItems='center' widthPct={80}>
                    <SubHeading>You can sell your {organPresenterMap[organ as string]} for</SubHeading>
                    <Heading >
                        <CountUp end={totalValue} separator=',' prefix='$'/>
                    </Heading>
                    <Flex justifyContent='space-between' widthPct={30} marginTop={100}>
                        <SurveyButton onClick={() => setAccepted(true)}>Accept</SurveyButton>
                        <Link href='/home' passHref>
                            <SurveyButton>Decline</SurveyButton>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default dynamic(() => Promise.resolve(PriceEval), {
    ssr: false
})

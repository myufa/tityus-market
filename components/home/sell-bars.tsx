import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../common/flex'
import SellMenu from './sell-menu'

import Kidney from '../../public/home/Kidney.png'
import Liver from '../../public/home/Liver.png'
import Bone from '../../public/home/Bone.png'
import Eye from '../../public/home/Eye.png'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 650px;
`

const SectionHeading = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    text-align: center;
    color: white;
`

const UserActionPanel = styled(Flex)`
    width: 325px;
    height: 340px;
    background: linear-gradient(180deg, #212634 0%, rgba(33, 38, 52, 0) 100%);
    border-radius: 12px;
`

const UserActionIconContainer = styled(Flex)`
    width: 80px;
    height: 80px;
    background: #BD4141;
    border-radius: 24px;
`

const UserActionHeading = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: white;
    margin: 0;
`

const UserActionCaption = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #EBEEF0;
    opacity: 0.8;
    width: 250px;
    height: 100px;
`



const SellBars = () => {
    return (
        <div>
            <Container>
                <Flex column>
                    <Flex center marginBottom={50}>
                        <SectionHeading>Start selling in 3 Steps</SectionHeading>
                    </Flex>
                    <Flex fullWidth center paddingLeft={30} paddingRight={30}>
                        <Flex justifyContent='space-between' width={1200}>
                            <UserActionPanel column>
                                <Flex justifyContent='center' paddingTop={60}>
                                    <UserActionIconContainer center>
                                        <Image src='/questionaire.svg' alt="Questionaire Icon" width={45} height={45} />
                                    </UserActionIconContainer>
                                </Flex>
                                <Flex justifyContent='center' paddingTop={40} marginBottom={0}>
                                    <UserActionHeading>Fill out questionnare</UserActionHeading>
                                </Flex>
                                <Flex justifyContent='center' marginBottom={0}>
                                    <UserActionCaption>Complete initial candidate profile and medical questionnaire</UserActionCaption>
                                </Flex>
                            </UserActionPanel>
                            <UserActionPanel column>
                                <Flex justifyContent='center' paddingTop={60}>
                                    <UserActionIconContainer center>
                                        <Flex paddingLeft={16} paddingTop={8}>
                                            <Image src='/form.svg' alt="Questionaire Icon" width={50} height={50} />
                                        </Flex>
                                    </UserActionIconContainer>
                                </Flex>
                                <Flex justifyContent='center' paddingTop={40} marginBottom={0}>
                                    <UserActionHeading>Sign Consent Form</UserActionHeading>
                                </Flex>
                                <Flex justifyContent='center' marginBottom={0}>
                                    <UserActionCaption>Sign a consent form agreeing to selling price and terms</UserActionCaption>
                                </Flex>
                            </UserActionPanel>
                            <UserActionPanel column>
                                <Flex justifyContent='center' paddingTop={60}>
                                    <UserActionIconContainer center>
                                        <Flex paddingLeft={5} paddingTop={5}>
                                            <Image src='/schedule.svg' alt="Questionaire Icon" width={45} height={45} />
                                        </Flex>
                                    </UserActionIconContainer>
                                </Flex>
                                <Flex justifyContent='center' paddingTop={40} marginBottom={0}>
                                    <UserActionHeading>Schedule Surgery</UserActionHeading>
                                </Flex>
                                <Flex justifyContent='center' marginBottom={0}>
                                    <UserActionCaption>Wait for transplant team to be in touch and coordinate times</UserActionCaption>
                                </Flex>
                            </UserActionPanel>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
            <Container>
                <Flex column>
                    <Flex center marginBottom={50}>
                        <SectionHeading>What can you sell?</SectionHeading>
                    </Flex>
                    <SellMenu />
                </Flex>
            </Container>
        </div>
    )
}

export default SellBars

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../common/flex'

import Logo from '../../public/home/Logo.png'


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    background: #1B1D27;
`

const LogoContainer = styled(Flex)`
`

const RightsReserved = styled.p`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #808080;
`

const SubHeading = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: white;
`

const InfoRow = styled.p`
    max-width: 280px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #808080;
    margin: 5px 0;
`

const EmailInputContainer = styled(Flex)`
    margin-top: 20px;
`

const EmailInput = styled.input`
    width: 240px;
    height: 35px;
    background: #303444;
    border-color: transparent;
    border-radius: 12px 0 0 12px;
    color: #808080;
`

const InputSubmitButton = styled.button`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-radius: 0 12px 12px 0;
    background-color: #BD4141;
    cursor: pointer;
    transition: color 0.5s, background-color 0.5s;
`

const Footer = () => {
    return (
        <Container>
            <Flex justifyContent='space-between'>
                <Flex column marginLeft={100} marginTop={30}>
                    <LogoContainer>
                        <Image src={Logo} alt="Logo" width={120} height={40}/>
                    </LogoContainer>
                    <RightsReserved>©TITYUS 2022, All rights reserved</RightsReserved>
                    <Flex alignItems='center'>
                        <Flex justifyContent='space-between' width={175}>
                            <Image src='/icon-fb.svg' alt="FB" width={12} height={22}/>
                            <Image src='/icon-insta.svg' alt="Insta" width={24} height={24}/>
                            <Image src='/icon-twitch.svg' alt="Twitch" width={24} height={24}/>
                            <Image src='/icon-twitter.svg' alt="Twitter" width={24} height={24}/>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex column marginRight={100}>
                    <Flex>
                        <Flex column marginRight={150}>
                            <SubHeading>Community</SubHeading>
                            <InfoRow>FAQ</InfoRow>
                            <InfoRow>Support</InfoRow>
                            <InfoRow>Privacy Policy</InfoRow>
                        </Flex>
                        <Flex column>
                            <Flex column>
                                <SubHeading>Newsletter</SubHeading>
                                <InfoRow>Signup for our newsletter to get the latest news in your inbox</InfoRow>
                                <EmailInputContainer>
                                    <EmailInput placeholder='Enter Your Email' />
                                    <InputSubmitButton>
                                        <Image src='/arrow-right.svg' alt="FB" width={12} height={22}/>
                                    </InputSubmitButton>
                                </EmailInputContainer>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Footer

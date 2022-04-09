import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../components/common/flex'
import SellNowSection from '../components/home/sell-now-section'
import Sellbars from '../components/home/sell-bars'
import AboutSection from '../components/home/about-section'

import Logo from '../public/home/Logo.png'
import Cycle from '../components/home/cycle'
import Footer from '../components/home/footer'
import useStore from '../store'
import { useEffect } from 'react'


const Container = styled.div`
`

const LearnMoreButton = styled.button`
    background-color: #BD4141;
    color: white;
    font-family: 'Poppins';
    font-size: 20px;
    border-radius: 30px;
    border-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    margin-right: 30px;
    transition: color 0.5s, background-color 0.5s;
    p {
        transition: color 0.5s;
    }
    :hover {
        background: white;
        color: black;
        p {
            color: black
        };
    }
`

const TopHeader = () => (
    <Flex justifyContent='space-between' alignItems='center' height={100} fullWidth>
        <Flex column marginLeft={30} pointer>
            <Link href='/home' passHref>
                <Image src={Logo} alt="Logo" width={120} height={40}/>
            </Link>
        </Flex>
        <Link href="#about" passHref>
            <LearnMoreButton>
                <p>Learn More</p>
            </LearnMoreButton>
        </Link>
    </Flex>
)

const HomePage: NextPage = () => {
    const clearState = useStore(state => state.clearState)

    useEffect(() => {
        clearState()
    }, [])

    return (
        <Container>
            <TopHeader />
            <SellNowSection />
            <Sellbars />
            <AboutSection />
            <Cycle />
            <Footer />
        </Container>
    )
}

export default HomePage

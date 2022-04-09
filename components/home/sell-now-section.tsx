import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../common/flex'


import HandStatue from '../../public/home/hand-statue.png'
import BustStatue from '../../public/home/bust-statue.png'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 650px;
`

const MainHeading = styled.h1`
    position: absolute;
    left: 80px;
    top: 30px;
    width: 500px;
    height: 130px;
    font-size: 50px;
    line-height: 66px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color: white;
    z-index: 3;
`

const StatSection = styled(Flex)`
    position: absolute;
    left: 80px;
    top: 280px;
`

const Stat = styled(Flex)`
    margin-bottom: 40px;
`

const StatHeading = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 40px;
    color: white;
    margin: 2px 0;
`

const StatCaption = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
    opacity: 0.5;
    margin: 2px 0 2px 4px;
`

const Blurb = styled.p`
    position: absolute;
    right: 200px;
    top: 340px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
    opacity: 0.5;
    width: 250px;
    height: 150px;
`

const Orb1Container = styled(Flex)`
    position: absolute;
    left: 380px;
    top: 350px;
`

const Orb2Container = styled(Flex)`
    position: absolute;
    right: 200px;
    top: 50px;
`

const HandFrameContainer = styled(Flex)`
    position: absolute;
    left: 400px;
    top: 90px;
    z-index: 1;
`

const HandContainer = styled(Flex)`
    position: absolute;
    left: 460px;
    top: 50px;
    z-index: 2;
`

const BustContainer = styled(Flex)`
    position: absolute;
    right: 220px;
    top: 30px;
    z-index: 2;
`

const SellNowButton = styled.button`
    position: absolute;
    right: 550px;
    top: 400px;
    background-color: #BD4141;
    color: white;
    font-family: 'Poppins';
    font-size: 20px;
    border-radius: 40px;
    cursor: pointer;
    z-index: 3;
    border-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
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

const SellNowSection = () => {
    return (
        <Container>
            <MainHeading>
                Find out how much
                your body is worth.
            </MainHeading>
            <StatSection column>
                <Stat column>
                    <StatHeading>10K+</StatHeading>
                    <StatCaption>Vendors</StatCaption>
                </Stat>
                <Stat column>
                    <StatHeading>5000+</StatHeading>
                    <StatCaption>Verified Clients</StatCaption>
                </Stat>
                <Stat column>
                    <StatHeading>$75M+</StatHeading>
                    <StatCaption>in Traded Volume</StatCaption>
                </Stat>
            </StatSection>
            <Blurb>Digital marketplace for transacting body parts. Sell now and receive high monetary compensations.</Blurb>
            <Orb1Container>
                <Image src="/red-circle-large.svg" alt="Red Circle Large" width={280} height={280} />
            </Orb1Container>
            <Orb2Container>
                <Image src="/red-circle-small.svg" alt="Red Circle Small" width={200} height={200} />
            </Orb2Container>
            <HandFrameContainer>
                <Image src="/statue-frame.svg" alt="Statue Frame" width={326} height={400} />
            </HandFrameContainer>
            <HandContainer>
                <Image src={HandStatue} alt="Hand Statue" width={340} height={420} />
            </HandContainer>
            <BustContainer>
                <Image src={BustStatue} alt="Bust Statue" width={220} height={267} />
            </BustContainer>
            <Link href="/sell-now" passHref>
                <SellNowButton>
                    <p>Sell Now</p>
                </SellNowButton>
            </Link>
        </Container>
    )
}

export default SellNowSection

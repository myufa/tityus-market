import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../common/flex'

import slantPanel from '../../public/home/slant-panel.png'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 650px;
`

const AboutHeading = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: white;
`

const Blurb = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: white;
    opacity: 0.5;
    width: 450px;
    height: 40px;
    padding-left: 5px;
    margin-top: 0;
`

const OrbContainer = styled(Flex)`
    position: absolute;
    left: -100px;
    top: 200px;
`

const AboutSection = () => {
    return (
        <Container id='about'>
            <Flex center fullHeight>
                <Flex justifyContent='center'>
                    <Flex column paddingRight={80}>
                        <Image src={slantPanel} alt="slant panel" width={320} height={465} />
                    </Flex>
                    <Flex column paddingRight={80}>
                        <AboutHeading>What is TITYUS ?</AboutHeading>
                        <Blurb>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </Blurb>
                    </Flex>
                </Flex>
            </Flex>
            <OrbContainer>
                <Image src="/red-circle-half.svg" alt="Red Circle Half" width={400} height={400} />
            </OrbContainer>
        </Container>
    )
}

export default AboutSection

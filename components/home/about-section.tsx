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
    width: 475px;
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
                <Flex justifyContent='space-between' fullWidth>
                    <Flex column paddingLeft={100}>
                        <Image src={slantPanel} alt="slant panel" width={320} height={465} />
                    </Flex>
                    <Flex column paddingRight={55}>
                        <AboutHeading>What is TITYUS ?</AboutHeading>
                        <Blurb>
                        TITYUS strives to revolutionize America&apos;s organ trade system. We started with the objective of
                        creating a more accessible and streamlined selling process that would enable people to monetize
                        their bodies efficiently. Today, we offer a trusted and easy-to-use platform for over 10 thousand
                        vendors nationwide, assuring them high monetary compensations and comprehensive support throughout
                        the transplant process.
                        </Blurb>
                    </Flex>
                </Flex>
            </Flex>
            <OrbContainer>
                <Image src="/red-circle-half.svg" alt="Red Circle Half" width={300} height={300} />
            </OrbContainer>
        </Container>
    )
}

export default AboutSection

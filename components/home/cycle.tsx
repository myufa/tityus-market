import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../common/flex'

import AboutCycle from '../../public/home/about-cycle.png'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 1300px;
`

const CyclePad = styled(Flex)`
    width: 80%;
    height: 80%;
    background: linear-gradient(180deg, #212634 0%, rgba(33, 38, 52, 0) 100%);
    border-radius: 12px;
`

const CycleContainer = styled(Flex)`
    margin-top: 10%;
    margin-left: 4%;
    width: 98%;
    height: 98%;
    position: relative;
`

const Cycle = () => {
    return (
        <Container>
            <Flex center fullHeight>
                <CyclePad center>
                    <CycleContainer>
                        <Image
                            src='/about-cycle.svg'
                            alt="About Cycle"
                            layout='fill'
                            objectFit='contain' />
                    </CycleContainer>
                </CyclePad>
            </Flex>
        </Container>
    )
}

export default Cycle

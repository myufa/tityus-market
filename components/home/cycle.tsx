import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Flex from '../common/flex'

import AboutCycle from '../../public/home/about-cycle.png'

const Container = styled(Flex)`
    position: relative;
    width: 100%;
    height: 1300px;
`

const CyclePad = styled(Flex)`
    width: 90%;
    height: 60%;
    background: linear-gradient(180deg, #212634 0%, rgba(33, 38, 52, 0) 100%);
    border-radius: 12px;
`

const CycleContainer = styled(Flex)`
    margin-top: 10%;
    margin-left: 2%;
    margin-right: 2%;
    width: 98%;
    height: 98%;
    position: relative;
`

const Cycle = () => {
    return (
        <Container center>
            <Flex center fullHeight fullWidth>
                <CyclePad center>
                    <CycleContainer>
                        <Image
                            src={AboutCycle}
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

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'

const Container = styled(Flex)`
`

const Heading = styled.h1`
    font-size: 65px;
    font-weight: bold;
    text-align: center;
`

const SubHeading = styled.h2`
    font-weight: 600;
    font-family: 'Raleway';
    font-size: 22px;
    text-align: center;
    width: 870px;
`

const InelligeableScreen = () => {
    return (
        <Container column center height={650}>
            <Flex column>
                <Flex justifyContent='center'>
                    <Heading>
                        You are ineligible to<br />
                        become a kidney vendor.
                    </Heading>
                </Flex>
                <Flex justifyContent='center'>
                    <SubHeading>
                        You will be redirected to the homepage shortly.
                    </SubHeading>
                </Flex>
            </Flex>
        </Container>
    )
}

export default InelligeableScreen

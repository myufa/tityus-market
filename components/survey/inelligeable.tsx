import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Flex from 'components/common/flex'
import { Organ } from 'store'

const Container = styled(Flex)`
`

const organPresenterMap: { [key: string]: string } = {
    [Organ.KIDNEY]: Organ.KIDNEY,
    [Organ.LIVER]: Organ.LIVER,
    [Organ.BONE]: 'bone marrow',
    [Organ.CORNEA]: Organ.CORNEA,
}

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

const InelligeableScreen = ({ organ }: { organ: Organ }) => {
    return (
        <Container column center height={650}>
            <Flex column>
                <Flex justifyContent='center'>
                    <Heading>
                        You are ineligible to<br />
                        become a {organPresenterMap[organ]} vendor.
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

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import styled from 'styled-components'

import Flex from '../common/flex'
import Kidney from '../../public/home/Kidney.png'
import Liver from '../../public/home/Liver.png'
import Bone from '../../public/home/Bone.png'
import Eye from '../../public/home/Eye.jpg'
import useStore, { Organ } from '../../store'

const OrganCard = styled(Flex)`
    background: black;
    border-radius: 12px;
    width: 23%;
`

const OrganContainer = styled(Flex)`
    cursor: pointer;

    overflow: hidden;
`

const OrganCaption = styled(Flex)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FAFAFB;
    background: #171C27;
    border-radius: 0 0 12px 12px;
`

const SellMenu = () => {
    const updateOrganForSale = useStore(state => state.updateOrganForSale)

    const router = useRouter()

    const handleClick = (organ: Organ) => {
        updateOrganForSale(organ)
        router.push('/create-profile')
    }

    return (
        <Flex fullWidth center paddingLeft={30} paddingRight={30}>
            <Flex justifyContent='space-between' width={1200}>
                <OrganCard column onClick={() => {handleClick(Organ.KIDNEY)}} pointer>
                        <Flex column>
                            <OrganContainer center>
                                <Image src={Kidney} alt="Kidney" width={200} height={200} />
                            </OrganContainer>
                            <OrganCaption fullWidth height={90} center>
                                <p>Kidney</p>
                            </OrganCaption>
                        </Flex>
                </OrganCard>
                <OrganCard column onClick={() => {handleClick(Organ.LIVER)}} pointer>
                    <Flex column>
                        <OrganContainer center>
                            <Image src={Liver} alt="Liver" width={200} height={200} />
                        </OrganContainer>
                        <OrganCaption fullWidth height={90} center>
                            <p>Part of liver</p>
                        </OrganCaption>
                    </Flex>
                </OrganCard>
                <OrganCard column onClick={() => {handleClick(Organ.BONE)}} pointer>
                    <Flex column>
                        <OrganContainer center>
                            <Image src={Bone} alt="Bone" width={200} height={200} />
                        </OrganContainer>
                        <OrganCaption fullWidth height={90} center>
                            <p>Bone marrow</p>
                        </OrganCaption>
                    </Flex>
                </OrganCard>
                <OrganCard column onClick={() => {handleClick(Organ.CORNEA)}} pointer>
                    <Flex column>
                        <OrganContainer center>
                            <Image src={Eye} alt="Eye" width={200} height={200} />
                        </OrganContainer>
                        <OrganCaption fullWidth height={90} center>
                            <p>Cornea</p>
                        </OrganCaption>
                    </Flex>
                </OrganCard>
            </Flex>
        </Flex>
    )
}

export default SellMenu

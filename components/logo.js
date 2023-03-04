import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import thistle from '../public/images/thistle.png'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const thistlePrintImg = `/images/thistle${useColorModeValue('', '-dark')}.png`
    return (
        <Link legacyBehavior href="/">
            <a>
                <LogoBox>
                    <Image src={thistlePrintImg} width={20} height={20} alt="logo" />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='Roboto' fontWeight="bold" ml={3}>
                        Harry
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
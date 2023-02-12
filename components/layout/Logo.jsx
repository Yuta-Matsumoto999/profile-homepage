import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
    font-wight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
`

const Logo = () => {
    const logoImg = `/images/matsu_pine-tree_12130.png`
    return (
        <Link href="/">
            <LogoBox>
                <Image src={logoImg} width={20} height={20} alt="Header Logo" />
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="Avenir"
                        ml={2}
                        fontWeight={800}
                        fontSize={18}
                    >
                        Yuta Matsumoto
                    </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
import { Inter } from '@next/font/google'
import { Box } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from "next/router";
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box bg={useColorModeValue("rgb(240, 231, 219)", "#202023")} minHeight={"100vh"} height={"100%"}>
      <Navbar path={router.asPath} colorMode={colorMode} toggleColorMode={toggleColorMode} />
    </Box>
  )
}

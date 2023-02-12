import Logo from "./Logo";
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inActiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <Link
            href={href}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? "#202023" : inActiveColor}
        >
            {children}
        </Link>
    )
}

const Navbar = ({ path, colorMode, toggleColorMode }) => {

    return (
        <Box
            position={"fixed"}
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#202023')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display={"flex"}
                p={2}
                maxW={"container.md"}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Flex
                    alignItems={"center"}
                    mr={5}
                >
                    <Logo />
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto"}}
                    alignItems={"center"}
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/skills" path={path}>
                        Skills
                    </LinkItem>

                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>

                <Box 
                    flexGrow={1}
                    ml={2}
                    display={"flex"}
                    justifyContent={"end"}
                    alignItems={"center"}
                >
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            colorScheme={useColorModeValue("purple", "orange")}
                            aria-label="DarkMode Switch"
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            onClick={toggleColorMode}
                        />
                    </Menu>
                    <Menu>
                        <MenuButton 
                            ml={2} 
                            as={IconButton} 
                            icon={<HamburgerIcon />} 
                            variant="outline"
                            display={{ base: "block", md: "none" }}
                        />
                    </Menu>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
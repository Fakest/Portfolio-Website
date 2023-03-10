import Logo from './logo.js'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon  } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColour = useColorModeValue('grey200', 'whiteAlpha.900')
    return (
        <Link
        href={href}
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColour}>
        {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props
    
    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#20202380', '#ffffff40')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md:'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, nmd:0}}
                    mr={{base: 4, nmd: 0}}>
                    
                    <LinkItem href="/work" path={path}>
                    Works
                    </LinkItem>
                    <LinkItem href="/photography" path={path}>
                        Photography
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu id='navbar-menu'>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} varient="outline" aria-label="Options">
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={Link} href="/">About</MenuItem>
                                <MenuItem as={Link} href="/work">Work</MenuItem>
                                <MenuItem as={Link} href="/photography">Photography</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
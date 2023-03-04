import { Container, Box, Heading, Image, Button, useColorModeValue } from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import BioTable from '../components/table'

const Page = () => {
    return (
        <Container>
                <Box borderRadius="lg" bg={useColorModeValue('#f2D7B2', '#4D4D56')} p={2} mb={6} align="center">
                    Hello, I am a Software Engineer based in Scotland.
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Harry Beggs
                        </Heading>
                        <p>Software Engineer at Morgan Stanley in Glasgow</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md: 6}} align="center">
                        <Image borderColor={useColorModeValue('#202023', '#f0e7db')} borderWidth={2} borderStyle="solid" maxWidth="125px" display="inline-block" borderRadius="full" src="images/pp.jpg" alt="Profile picure" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Harry is a driven and enthusiastic young engineer who is still developing and honing his craft.
                        He has a passion for learning and self improvement, constantly striving to do better than his previous attempts.
                        When not working, Harry takes part in many hobbies. Skateboarding, Photography, Guitar to name a few.                
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioTable></BioTable>
                </Section>
        </Container>
    )
}

export default Page
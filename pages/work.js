import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem, GridItem } from "../components/grid-item";

import vp from '../public/images/vp.jpg'
import emir from '../public/images/emir.jpg'

const Work = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Work
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <GridItem id="VP" title="Vanishing Point Detection" thumbnail={vp} href="https://github.com/Fakest/VPDetection">
                        Submitted as my disertation to my Honours Degree, analysis on different vanishing point detection methodologies and how they can be used and improved upon.
                    </GridItem>
                </Section>
                <Section>
                <WorkGridItem id="MS" title="Global Transaction Reporting" thumbnail={emir}>
                        While working at Morgan Stanley I have worked with a fantastic team to help build Morgan Stanleys Global Transaction Reporting System, specifically regarding EMIR regulation.
                    </WorkGridItem>
                </Section>
                <Section>
                <WorkGridItem id="VP" title="Vanishing Point Detection" thumbnail={vp}>
                        Submitted as my disertation to my Honours Degree, analysis on different vanishing point detection methodologies and how they can be used and improved upon.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Work
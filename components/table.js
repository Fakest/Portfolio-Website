import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'

const BioTable = () => {
  return(

  <TableContainer>
    <Table variant ='simple'>
      <Tbody >
        <Tr>
          <Td>
            <BioYear>2017 - 2019</BioYear>
          </Td>
          <Td>
            <BioSection>Hnd Applied Computing</BioSection>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <BioYear>2019 - 2021</BioYear>
          </Td>
          <Td>
            <BioSection>1st Class BSc (Hons) Applied Computing</BioSection>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <BioYear>2021 - 2022</BioYear>
          </Td>
          <Td>
            <BioSection>IT Technician - Modus Scotland</BioSection>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <BioYear>2022 - 2023</BioYear>
          </Td>
          <Td>
            <BioSection>Software Engineer - Morgan Stanley</BioSection>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default BioTable
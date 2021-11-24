import { Box, Flex, Button, Heading, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th p={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Renan Veronez</Text>
                    <Text fontSize="sm" color="gray.300">renanvz@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>19 Nov. 2021</Td>}
                {/* <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td> */}
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Renan Veronez</Text>
                    <Text fontSize="sm" color="gray.300">renanvz@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>19 Nov. 2021</Td>}
                {/* <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td> */}
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Renan Veronez</Text>
                    <Text fontSize="sm" color="gray.300">renanvz@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>19 Nov. 2021</Td>}
                {/* <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td> */}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>

    </Box>
  )
}
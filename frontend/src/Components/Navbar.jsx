import { Container, Flex, Text } from '@chakra-ui/react'
const Navbar = () => {
  return <Container maxW={"1140px"} px={4}>
    <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"center"}
    >
        <Text
            fontSize={{base: 28, sm: 60}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            paddingTop={"50px"}
            pr={"5px"}
        >
            TO-DO LIST
        </Text>
    </Flex>
  </Container>
  
}

export default Navbar
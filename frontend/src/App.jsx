import { Box } from "@chakra-ui/react"
import HomePage from "./Pages/HomePage"
import Navbar from "./Components/Navbar"
function App() {

  return (
    <>
      <Box minH={"100vh"} bg={""}>
        <Navbar/>
        <HomePage/>
      </Box>
    </>
  )
}

export default App

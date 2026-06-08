import { Box } from "@chakra-ui/react"
import HomePage from "./Pages/HomePage"
import Navbar from "./Components/Navbar"
function App() {

  return (
    <>
      <Box minH={"100vh"} bg={"rgb(29, 29, 29)"}>
        <Navbar/>
        <HomePage/>
      </Box>
    </>
  )
}

export default App

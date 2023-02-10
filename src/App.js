import { ChakraProvider, Container } from "@chakra-ui/react";
import GraphsContainer from "./GraphsContainer";
import SearchBar from "./SearchBar";

function App() {
  return (
    <ChakraProvider>
      <Container w="100%" h="100%">
        <SearchBar />
        <GraphsContainer />
      </Container>
    </ChakraProvider>
  );
}

export default App;

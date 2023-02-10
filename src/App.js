import { ChakraProvider, Container } from "@chakra-ui/react";
import LineGraph from "./LineGraph";
import GraphsContainer from "./GraphsContainer";
import { LongCall, LongPut, ShortCall, ShortPut } from "./options_data/Types";

function App() {
  return (
    <ChakraProvider>
      <Container w="100%" h="100%">
        <GraphsContainer />
      </Container>
    </ChakraProvider>
  );
}

export default App;

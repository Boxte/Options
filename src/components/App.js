import { ChakraProvider, Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import GraphsContainer from "./GraphsContainer";
import SearchBar from "./SearchBar";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container w="100%" h="100%">
          <SearchBar />
          <GraphsContainer />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;

import { ChakraProvider, Container } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import LineGraph from "./Chart";
import GraphsContainer from "./GraphsContainer";
import { LongCall, LongPut, ShortCall, ShortPut } from "./options_data/Types";

function App() {
  const data = [
    <LineGraph optionsType={LongCall} />,
    <LineGraph optionsType={ShortCall} />,
    <LineGraph optionsType={LongPut} />,
    <LineGraph optionsType={ShortPut} />,
  ];
  return (
    <ChakraProvider>
      <Container w="100%" h="100%">
        <GraphsContainer graphs={data} />
      </Container>
    </ChakraProvider>
  );
}

export default App;

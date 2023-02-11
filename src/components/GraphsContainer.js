import { Flex } from "@chakra-ui/react";
import LineGraph from "./LineGraph";
import { LongCall, LongPut, ShortCall, ShortPut } from "../options_data/Types";

const GraphsContainer = (props) => {
  const data = [
    <LineGraph optionsType={LongCall} />,
    <LineGraph optionsType={ShortCall} />,
    <LineGraph optionsType={LongPut} />,
    <LineGraph optionsType={ShortPut} />,
  ];

  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      align="center"
      justify="center"
    >
      {data}
    </Flex>
  );
};

export default GraphsContainer;

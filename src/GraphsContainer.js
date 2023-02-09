import { Flex } from "@chakra-ui/react";

const GraphsContainer = (props) => {
  const { graphs } = props;
  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      align="center"
      justify="center"
    >
      {graphs}
    </Flex>
  );
};

export default GraphsContainer;

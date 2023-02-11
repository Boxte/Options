import { Flex } from "@chakra-ui/react";
import LineGraph from "./LineGraph";
import { LongCall, LongPut, ShortCall, ShortPut } from "../options_data/Types";
import { connect } from "react-redux";

const GraphsContainer = (props) => {
  const { filterBy } = props;

  const allOptions = [LongCall, ShortCall, LongPut, ShortPut];
  const maybeSomeOptions = allOptions.filter((el) => {
    const { title } = el;
    return title.toLowerCase().includes(filterBy);
  });
  const data = maybeSomeOptions.map((option) => (
    <LineGraph optionsType={option} />
  ));

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

const mapStateToProps = (state) => {
  const { textReducer } = state;
  return {
    filterBy: textReducer.text,
  };
};

export default connect(mapStateToProps)(GraphsContainer);

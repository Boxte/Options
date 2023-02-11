import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import { connect } from "react-redux";
import { Actions } from "../store/Actions";

const SearchBar = (props) => {
  const { text, handleTextChange } = props;
  return (
    <InputGroup>
      <InputLeftAddon children={<UilSearch />} />
      <Input
        placeholder="Search for option"
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      ;
    </InputGroup>
  );
};

const mapStateToProps = (state) => {
  const { textReducer } = state;
  return {
    text: textReducer.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTextChange: (text) => dispatch({ type: Actions.UPDATE_SEARCH, text }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

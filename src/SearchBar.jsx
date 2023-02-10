import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/input";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

const SearchBar = (props) => {
  return (
    <InputGroup>
      <InputLeftAddon children={<UilSearch />} />
      <Input placeholder="Search for option" />;
    </InputGroup>
  );
};

export default SearchBar;

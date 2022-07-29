import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchComponent = ({ onChangeText }) => {
  return <Searchbar placeholder="Search" onChangeText={onChangeText} />;
};

export default SearchComponent;

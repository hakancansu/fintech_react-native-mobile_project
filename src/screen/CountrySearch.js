import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import CardComponent from "../components/Card";
import SearchComponent from "../components/Search";
import { baseUrl } from "../AppConfig";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);

  const getData = async (name) => {
    
    const res =
      name === ""
        ? await axios.get(`${baseUrl}/all`)
        : await axios.get(`${baseUrl}/capital/${name}`);
    setCountries(res.data);
  };

  useEffect(() => {
    getData("");
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <SearchComponent onChangeText={(e) => getData(e)} />
      <CardComponent countries={countries} containerSyle={{ marginTop: 40 }} />
    </View>
  );
};
export default CountrySearch;

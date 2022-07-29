import * as React from "react";
import { 
  View, 
  FlatList,
} from "react-native";
import {
  DataTable,
  Card,
} from "react-native-paper";

const CardComponent = ({ countries, containerSyle }) => {
  return (
    <View style={containerSyle}>
      <Card>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Capital</DataTable.Title>
          <DataTable.Title numeric>Region</DataTable.Title>
        </DataTable.Header>
      </Card>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <View>
            <DataTable.Row>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.capital}</DataTable.Cell>
              <DataTable.Cell numeric>{item.region}</DataTable.Cell>
            </DataTable.Row>
          </View>
        )}
      />
    </View>
  );
};

export default CardComponent;

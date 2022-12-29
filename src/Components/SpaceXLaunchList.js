import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LOAD_LAUNCHES } from "../Graphql/queries";
import LaunchCard from "./LaunchCard";

function SpaceXLaunchList() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(15);

  const { error, loading, data } = useQuery(LOAD_LAUNCHES, {
    variables: { limit: limit, offset: offset },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={45} />
          <Text style={styles.text}>Loading SpaceX Launches 🚀</Text>
        </View>
      ) : (
        <View style={styles.dataContainer}>
          <FlatList
            data={data.launchesPast}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => (
              <LaunchCard details={item} index={index} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dataContainer: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    fontFamily: "bold",
    color: "white",
    fontStyle: "italic",
  },
});

export default SpaceXLaunchList;

import React from "react";
import { FlatList, View, Image, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

function Carousel({ images }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        persistentScrollbar={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item }}
            style={{
              height: 250,
              width: width - 70,
              resizeMode: "stretch",
              borderRadius: 15,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 15,
  },
});

export default Carousel;

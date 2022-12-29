import moment from "moment/moment";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ViewMoreText from "react-native-view-more-text";
import Carousel from "./Carousel";

function LaunchCard({ details }) {
  const getDate = () => {
    var dt = new Date(details.launch_date_local);
    return (
      dt.getDate() + "/" + dt.getMonth().toString() + "/" + dt.getFullYear()
    );
  };

  const renderViewLess = (onPress) => {
    return (
      <Text style={styles.viewmore} onPress={onPress}>
        View less
      </Text>
    );
  };

  const renderViewMore = (onPress) => {
    return (
      <Text style={styles.viewmore} onPress={onPress}>
        View more
      </Text>
    );
  };

  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.conatiner}>
      {details.links.flickr_images.length > 0 && (
        <Carousel images={details.links.flickr_images} />
      )}
      <View>
        <Text style={styles.missionName}>{details.mission_name}</Text>
        <Text style={styles.date}>
          {moment(details.launch_date_local).format("DD MMMM YYYY")}
        </Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
        >
          <Text style={styles.details}>{details.details}</Text>
        </ViewMoreText>
        <View style={styles.box}>
          <Text style={styles.rocketDet}>{details.rocket.rocket_name} 🚀</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    margin: 15,
    padding: 15,
    elevation: 2,
    borderRadius: 11,
    backgroundColor: "#FD7F20",
  },
  box: {
    padding: 7,
    marginVertical: 7,
    backgroundColor: "#404040",
    borderRadius: 5,
  },
  missionName: {
    fontWeight: "bold",
    fontSize: 21,
    fontStyle: "italic",
    color: "white",
  },
  date: {
    fontWeight: "400",
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
  },
  details: {
    fontSize: 17,
    fontWeight: "normal",
    color: "white",
  },
  viewmore: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },
  moredetailsButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  rocketDet: {
    fontSize: 19,
    color: "#d7d7cf",
    fontWeight: "500",
  },
});

export default LaunchCard;

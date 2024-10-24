import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

interface Props {
  data: ArrayLike<{ img: any; datatype: string }>;
  numOfPostColumns: number;
}

const { width } = Dimensions.get("window");
const numOfPostColumns = 3;
const imagePostSize = Math.round(width / numOfPostColumns);
console.log(imagePostSize);
const ImageArrayComponent = ({ data, numOfPostColumns }: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.imageGrid}
      data={data}
      numColumns={numOfPostColumns}
      renderItem={({ item }) => (
        <View style={{ width: imagePostSize, height: imagePostSize }}>
          {item.datatype === "image" && (
            <Image source={item.img} style={styles.image} />
          )}
        </View>
      )}
    />
  );
};

export default ImageArrayComponent;

const styles = StyleSheet.create({
  editProfileBtn: {
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    padding: 3,
    width: "90%",
    alignSelf: "center",
  },

  socialMetric: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageGrid: {
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    margin: 1,
  },
});

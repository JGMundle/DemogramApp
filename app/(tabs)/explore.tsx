import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import BaseScreen from "@/components/screens/BaseScreen";
import { useState } from "react";
import { spacingX, spacingY } from "@/config/spacing";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import FilteringModal from "../modal/FilteringModal";
import { useRouter } from "expo-router";

const Tabs = [
  "IGTV",
  "Shop",
  "Style",
  "Sports",
  "Auto",
  "New York City",
  "Funny videos",
  "Trending",
];

const { width } = Dimensions.get("window");
const imagePostSize = Math.round(width / 2);

export const photoBucket2 = [
  { img: require("../../assets/images/Pexel/pexels-img1.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img2.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img3.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img4.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img5.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img6.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img7.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img8.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img9.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img12.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img13.jpg") },
  { img: require("../../assets/images/Pexel/pexels-img14.jpg") },
];

export default function TabTwoScreen() {
  const [searchInputData, setSearchInputData] = useState<string>();
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
   const router = useRouter();
  console.log(searchInputData);
  return (
    <BaseScreen>
      <View style={styles.searchBar}>
        <MaterialCommunityIcons name="magnify" size={25} />
        <TextInput
          placeholder="Search"
          value={searchInputData}
          onChangeText={(text) => setSearchInputData(text)}
          style={styles.inputField}
        />

        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          onPress={() => setIsFiltering(!isFiltering)}
        >
          <MaterialCommunityIcons
            color="black"
            name={!isFiltering ? "filter-outline" : "filter-menu"}
            size={26}
          />
        </Pressable>

        <FilteringModal isVisible={isFiltering} />
      </View>

      {/* Mini Tabs */}

      <View style={{ flexDirection: "row" }}>
        <Animated.FlatList
          entering={FadeInUp.delay(100).springify().damping(12).stiffness(100)}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={Tabs}
          contentContainerStyle={{
            gap: 10,
            marginLeft: 5,
            marginTop: 5,
          }}
          renderItem={({ item }) => <Text style={styles.Text}>{item}</Text>}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={photoBucket2}
        contentContainerStyle={{ width: "100%", marginTop: 10}}
        renderItem={({ item }) => (
          <Pressable
            //Yellow brackets {} configuration object
            onPress={() => router.navigate({pathname: "/(screens)/UserPostDetailsScreen", params: {...item}})}
          >
            <View style={{ width: imagePostSize, height: imagePostSize }}>
              <Image source={item.img} style={styles.image} />
            </View>
          </Pressable>
        )}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: Colors.defaultGrayBG,
    marginHorizontal: spacingY._20,
    marginVertical: spacingY._5,
    gap: spacingX._10,
    borderRadius: spacingY._15,
    paddingLeft: spacingX._5,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  inputField: {
    flex: 1,
    borderRightWidth: 1,
    paddingRight: spacingX._15,
  },

  Text: {
    fontSize: 18,
    borderWidth: 1,
    fontWeight: "500",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

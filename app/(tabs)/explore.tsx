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
import BaseScreen from "@/components/screens/BaseScreen";
import { useState } from "react";
import { spacingX, spacingY } from "@/config/spacing";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import FilteringModal from "../modal/FilteringModal";
import { useRouter } from "expo-router";

// This variable contains all the names of the little tabs you see below the search bar
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

// A variable that contains all the different images you see on explore
export const photoBucket2 = [
  {
    img: [
      require("../../assets/images/Pexel/pexels-img1.jpg"),
      require("../../assets/images/Pexel/pexels-img7.jpg"),
    ],
  },
  { img: [require("../../assets/images/Pexel/pexels-img2.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img3.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img4.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img5.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img6.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img7.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img8.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img9.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img12.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img13.jpg")] },
  { img: [require("../../assets/images/Pexel/pexels-img14.jpg")] },
];

export default function TabTwoScreen() {
  const [searchInputData, setSearchInputData] = useState<string>(); // This useState variable keeps track of what the user types in the search bar
  const [isFiltering, setIsFiltering] = useState<boolean>(false); // This useState variable is for a filtering modal that shows up when you press it
  const router = useRouter(); //This is used for navigation
  console.log(searchInputData);


  return (
    <BaseScreen>
      <View style={styles.searchBar}>
        <MaterialCommunityIcons name="magnify" size={25} />

        {/* The search bar */}
        <TextInput
          placeholder="Search"
          value={searchInputData}
          onChangeText={(text) => setSearchInputData(text)}
          style={styles.inputField}
        />

        {/* One of the tabs you can press to navigate to IGTV */}
        <Pressable onPress={() => router.push("/(screens)/VideoScreen")}>
          <MaterialCommunityIcons name="video-3d" size={28} />
        </Pressable>

        {/* When pressed, it opens a filtering modal */}
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

        {/* The Filtering Modal */}
        <FilteringModal isVisible={isFiltering} />
      </View>

      {/* Mini Tabs */}

      <View style={{ flexDirection: "row" }}>
        {/* The FlatList that contains all the little tabs you see below the search bar */}
        <FlatList
          // entering={FadeInUp.delay(100).springify().damping(12).stiffness(100)}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={Tabs}
          contentContainerStyle={{
            gap: 10,
            marginLeft: 5,
            marginTop: 5,
          }}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() =>
                router.push(
                  `${
                    item === "Shop" // Routes you to the "shop screen"
                      ? "/(screens)/shop"
                      : item === "IGTV"
                      ? "/(screens)/IGTVScreen" // Routes you to the "IGTV screen"
                      : "/(tabs)/explore"
                  }`
                )
              }
            >
              <View style={styles.Text}>
                {index === 0 && (
                  <MaterialCommunityIcons
                    name="television"
                    size={18}
                    color="black"
                  />
                )}
                {index === 1 && (
                  <FontAwesome5 name="shopping-bag" size={18} color="black" />
                )}
                <Text style={{ paddingLeft: index <= 1 ? spacingX._5 : 0 }}>
                  {item}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={photoBucket2}
        contentContainerStyle={{ width: "100%", marginTop: 10 }}
        renderItem={({ item, index }) => (
          <Pressable
            //Yellow brackets {} configuration object
            onPress={() =>
              router.navigate({ //Pressing one of the images results in taking you to a screen where it gives you more info about it
                pathname: "/(screens)/UserPostDetailsScreen",
                params: { ...item },
              })
            }
          >
            <View
              style={{
                width: imagePostSize,
                height: imagePostSize,
                position: "relative",
              }}
            >
              {(item.img as any[]).length > 1 && (
                <Ionicons
                  name="copy"
                  size={24}
                  color="white"
                  style={{
                    position: "absolute",
                    zIndex: 10,
                    top: 20,
                    right: 20,
                  }}
                />
              )}
              <Image source={item.img[0]} style={styles.image} />
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
    alignItems: "center",
    flexDirection: "row",
  },

  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
});

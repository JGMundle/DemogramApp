import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import FilteringModal from "../modal/FilteringModal";
import { spacingX, spacingY } from "@/config/spacing";
import { Colors } from "@/constants/Colors";
import BaseScreen from "@/components/screens/BaseScreen";
import { products } from "@/utils/data";
import Typo from "@/components/basecomponents/Typo";
import { useBasketStore } from "@/statemanagement/useBasketStore";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
const imagePostSize = Math.round(width / 2);
const logoSize = 28;

const shop = () => {
  const [searchInputData, setSearchInputData] = useState<string>();
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const router = useRouter();
  const {favoritedItems} = useBasketStore()
  return (
    <BaseScreen>
      {/* Navigation */}
      <Animated.View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginHorizontal: spacingX._15,
          paddingVertical: spacingY._15
        }}
      >
        {/* <View>
          <Pressable>
            <MaterialCommunityIcons name="view-grid" size={logoSize} color="black" />
          </Pressable>
        </View> */}

        <View style={{ flexDirection: "row", gap:10 }}>
          <Pressable onPress={() => router.push("/(screens)/ShoppingBasket")}>
            <MaterialCommunityIcons name="cart" size={logoSize} color="black" />
          </Pressable>

          <Pressable onPress={() => console.log("Route for Favourites goes here")}>
            <MaterialCommunityIcons
              name={favoritedItems.length > 0 ? "heart" : "heart-outline"}
              size={logoSize}
              color={favoritedItems.length > 0 ? "red" : "black"}
            />
          </Pressable>
        </View>
      </Animated.View>

      {/* Search Bar */}
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

      {/* Return Home */}
      <Pressable
        onPress={() => router.navigate("/")}
        style={{
          alignContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          marginLeft: 4,
        }}
      >
        <MaterialCommunityIcons name="chevron-left" size={30} />
        <Text>Return Home</Text>
      </Pressable>

      {/* Items Flat List */}

      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{}}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1, padding: 10 }}>
            <Pressable
              onPress={() =>
                router.navigate({
                  pathname: "/(screens)/UserItemScreen",
                  params: { ...item },
                })
              }
              style={{
                width: imagePostSize,
                height: imagePostSize,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: "gray",
                borderRadius: 20,
              }}
            >
              <Image source={item.url} style={styles.image} />
            </Pressable>
            <Text style={{ fontWeight: "600" }}>{item.name}</Text>
            <Text style={{ color: "gray" }}>{`£${item.price}`}</Text>

            <Pressable
              onPress={() => console.log("Item added")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <MaterialCommunityIcons name="shopping-outline" size={24} />
              <Typo>Add to Bag</Typo>
            </Pressable>
          </View>
        )}
      />
    </BaseScreen>
  );
};

export default shop;

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

  inputField: {
    flex: 1,
    borderRightWidth: 1,
    paddingRight: spacingX._15,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});

import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useBasketStore } from "@/statemanagement/useBasketStore";
import Animated, { FadeInLeft } from "react-native-reanimated";
import Typo from "@/components/basecomponents/Typo";
import ShoppingKartItem from "@/components/ShoppingKartItem";
import BaseScreen from "@/components/screens/BaseScreen";
const ShoppingBasket = () => {
  const { items } = useBasketStore();
  console.log(items.map((i) => i.url));

  return (
    <BaseScreen>
      <Animated.View
        style={{
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 24 }}>
          Your Total is: £
          {items.length > 0
            ? items.map((i) => i.price).reduce((prev, acc) => prev + acc)
            : 0}
        </Text>
      </Animated.View>

      <FlatList
        scrollEnabled
        data={items}
        renderItem={({ item }) => <ShoppingKartItem item={item} />}
      />
    </BaseScreen>
  );
};

export default ShoppingBasket;

const styles = StyleSheet.create({});

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageURISource,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  Entypo,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import Typo from "@/components/basecomponents/Typo";
import { Colors } from "@/constants/Colors";
import { BasketItem, useBasketStore } from "@/statemanagement/useBasketStore";

export default function UserItemScreen() {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [viewComments, setViewComments] = useState<boolean>(false);

  const itemData = useLocalSearchParams();
  const { addItem, items } = useBasketStore();


   const handleAddItem = () => {
     addItem({
       id: Number(itemData.id),
       url: Number(itemData.url),
       name: String(itemData.name),
       price: Number(itemData.price),
       quanity: 0,
       category: String(itemData.category),
       description: String(itemData.description),
     });
   };
  
 

  //NodeRequire is the return type of require("url.com") is a number
  return (
    <ScrollView style={{ borderColor: "blue", padding: 7 }}>
      {/* Chevron Back */}
      <Pressable onPress={() => router.back()}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={32}
          style={{ backgroundColor: Colors.darkGrayBG }}
        />
      </Pressable>

      {/* User and three dots */}
      <View
        style={{
          alignItems: "center",
          gap: 220,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <View>
            <FontAwesome name="user" />
          </View>
          <Text style={{ fontWeight: 700 }}>Juewell</Text>
        </View>

        <Entypo name="dots-three-horizontal" size={25} />
      </View>

      {/* Item and Image */}
      <Text style={{ fontWeight: "600", fontSize: 25, marginVertical: 10 }}>
        {String(itemData.name)}
      </Text>
      <Image
        source={Number(itemData.url)}
        style={{ width: 400, height: 400 }}
      />

      <View style={{ flexDirection: "row", gap: 250 }}>
        {/* Price */}
        <View>
          <Text style={{ fontSize: 30 }}>£{Number(itemData.price)}</Text>
        </View>

        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => handleAddItem()}
        >
          
          <MaterialCommunityIcons name="shopping" size={24} color="black" />
          <Typo>Add to Basket</Typo>
        </Pressable>

        <Pressable
          style={{position: "absolute", bottom: 100, flexDirection: "row", alignItems: "center"}}
          onPress={() => router.navigate("/(screens)/ShoppingBasket")}
        >
          <Typo>Go To Checkout</Typo>
          <MaterialCommunityIcons name="basket-check" color="black" size={24} />
        </Pressable>

        {/* Add to basket, w */}
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <AntDesign
            name={!isLiked ? "hearto" : "heart"}
            color={!isLiked ? "black" : "red"}
            size={27}
            onPress={() => {
              setIsLiked(!isLiked); //toggle effect
            }}
          />
          <Feather name="share-2" size={27} />
        </View>
      </View>

      {/* Description */}

      <Text style={{ marginTop: 6, fontSize: 19 }}>
        This is a description about the product
      </Text>

      {/* Reviews */}
      <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "600" }}>
        Customer reviews
      </Text>

      <View>
        <Text style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>User 1: </Text>
          This is my review
        </Text>
        <Text style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>User 2: </Text>
          This is my review too!
        </Text>
        <Text style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>User 3: </Text>
          I've also got a review!
        </Text>
      </View>

      {/* {!viewComments ? (
          comments?.slice(0, 1).map((comment) => <Text>{comment}</Text>)
        ) : (
          <FlatList
              data={comments}
              keyExtractor={item => item}
            renderItem={({ item }) => <View>{item} </View>}
          />
        )} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

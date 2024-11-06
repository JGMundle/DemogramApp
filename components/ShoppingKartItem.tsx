import { spacingY, radius } from "@/config/spacing";
import { Colors } from "@/constants/Colors";
import { BasketItem, useBasketStore } from "@/statemanagement/useBasketStore";
import { normalizeX, normalizeY } from "@/utils/normalize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Alert, Image, Dimensions, Pressable, StyleSheet, Text} from "react-native";
import Animated, { FadeInRight, FadeOutLeft, } from "react-native-reanimated";
import Typo from "./basecomponents/Typo";
const {width, height} = Dimensions.get("screen")

interface Props {
    item: BasketItem
}

const ShoppingKartItem = ({ item }: Props) => {
    
    const { removeItem } = useBasketStore()
    const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    
    return (
        <Animated.View
            style={[styles.container, { position: "relative" }]}
            entering={FadeInRight.delay(1).springify().damping(12)}
            exiting={FadeOutLeft.delay(50).springify().damping(12)}
        >
            <View style={styles.imgContainer}>
                <Image
                    source={Number(item.url)}
                    resizeMode="contain"
                    style={{ width: width * 0.25, height: width * 0.25 }}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                ></View>
                <View style={{ flexDirection: "column" }}>
                    <Typo style={{ fontWeight: "200" }}>
                        {item.name}
                    </Typo>
                    <Typo style={{ fontWeight: "800" }}>
                        {item.category}
                    </Typo>
                </View>
                <Pressable
                    onPress={() =>
                        Alert.alert("", `Remove ${item.name} from your basket?`, [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel"),
                                style: "cancel",
                            },
                            {
                                text: "OK",
                                onPress: () => removeItem(item.id),
                            },
                        ])
                    }
                >
                    <MaterialCommunityIcons
                        name="delete-outline"
                        size={normalizeY(32)}
                        color={Colors.lightGrayBG}
                    />
                </Pressable>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text>£{String(item.price)}</Text>
                    {/* <Text>
            £{String(item.price.toFixed(2))}
          </Text> */}
                    <Animated.View style={styles.iconBackground}>
                        <MaterialCommunityIcons name="heart" size={24} />
                    </Animated.View>
                </View>
            </View>

            <Animated.View>
                <Text style={{fontWeight: "200"}}>{}</Text>
            </Animated.View>
        </Animated.View>
    )
        
}

export default ShoppingKartItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: normalizeY(17),
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: normalizeY(15),
    borderRadius: normalizeY(12),
    gap: normalizeX(10),
    borderCurve: "continuous",
    width: "100%",
  },
  imgContainer: {
    padding: spacingY._10,
    backgroundColor: Colors.lightGrayBG,
    borderRadius: normalizeY(15),
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertBox: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
 message: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  iconBackground: {
    padding: normalizeY(2),
    borderRadius: radius._20,
    backgroundColor: "#fff"
  },
});
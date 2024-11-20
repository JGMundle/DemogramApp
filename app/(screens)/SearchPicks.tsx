import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import React from 'react'
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { normalizeY } from '@/utils/normalize';
import { products } from '@/utils/data';
import { Image } from 'expo-image';

const { width } = Dimensions.get("window");
const numOfPostColumns = 3;
const imagePostSize = Math.round(width / numOfPostColumns);


const SearchPicks = () => {
  return (
    <View>
      {/* Username, Settings & Threads */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 120,
          alignItems: "center",
          paddingTop: normalizeY(10),
        }}
      >
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <MaterialCommunityIcons name="chevron-left" size={46} />
        </Pressable>

        <Text style={{ fontSize: 18, fontWeight: "bold" }}>All Posts</Text>
      </View>

      <FlatList
        data={products}
        numColumns={numOfPostColumns}
        renderItem={({ item }) => (
          <View style={{ width: imagePostSize, height: imagePostSize }}>
                <Image source={item.url} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

export default SearchPicks

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    margin: 1,
  },
});
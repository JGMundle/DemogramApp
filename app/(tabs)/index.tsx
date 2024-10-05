import BaseScreen from "@/components/screens/BaseScreen";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <BaseScreen>
      <View
        style={{ padding: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 1, borderColor:"red" }}
      >
        <View>
          <Text>Instagram</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 5}}>
          <Icon name="heart" size={28} />
          <Icon name="heart" size={28} />
        </View>
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({});

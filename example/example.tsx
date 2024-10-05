import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  Button,
} from "react-native";

import React, { useState } from "react";
import Dialog from "react-native-dialog";

/* Rendering images native is static rendering
          When we load applications the image is loaded one time 
          at the begin of the app intialisation
  */

/* Uri either url OR urn */

/* <Image source={require("@/assets/images/coffeeMachine.jpg")} /> */

const demo = () => {
  const [dismisses, setDismisses] = useState(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleText = (text: string) => {
    setInputValue(text);
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Demo
      </Text>

      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            "Alert!",
            "This is an Alert. ",
            [{ text: "OK", onPress: () => console.log("Alert acknowledged.") }],
            {
              cancelable: true,
              onDismiss: () => {
                setDismisses(dismisses + 1);
                console.log(dismisses);
              },
              userInterfaceStyle: "dark",
              //Android Only Options are cancelable and onDismiss
              //iOS - userInterfaceStyle
            }
          )
        }
      >
        <Text style={styles.mainText}>Tap for an Alert</Text>
      </TouchableOpacity>

      {/* Alert.alert is for iOS and Android, but Alert.prompt is only for iOS only */}
      <TouchableOpacity
        onPress={() =>
          Alert.prompt("Prompt Message", "This is a prompt message", (text) =>
            console.log(text)
          )
        }
      >
        <Text
          style={{
            fontSize: 30,
            margin: 5,
          }}
        >
          {Platform.OS === "android"
            ? "This is android"
            : "This is another device"}
        </Text>
      </TouchableOpacity>

      <Pressable onPress={() => console.log("This has been pressed!")}>
        <Text
          style={{
            fontSize: 30,
            margin: 2,
          }}
        >
          This a pressable
        </Text>
      </Pressable>

      <Button title="Open Prompt" onPress={() => setVisible(true)} />
      {/* Workaround for android */}
      {Platform.OS === "android" && (
        <Dialog.Container visible={visible}>
          <Dialog.Title>Prompt Message For Android</Dialog.Title>
          <Dialog.Input
            placeholder="Enter your answer"
            onChangeText={handleText}
            value={inputValue}
          />
          {/* Add action buttons */}
          <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
          <Dialog.Button
            label="Accept"
            onPress={() => {
              console.log(inputValue);
              setVisible(false);
            }}
          />
        </Dialog.Container>
      )}

      <Text
        style={{
          fontSize: 40,
          marginTop: 6,
          textAlign: "center",
        }}
      >
        {counter}
      </Text>
      <Button title="Add 1" onPress={() => setCounter(counter + 1)} />
      <Button
        title="Subtract 1"
        color="red"
        onPress={() => setCounter(counter - 1)}
      />
    </SafeAreaView>
  );
};

export default demo;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Platform.OS === "android" ? 70 : 40,
  },
  mainText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: Platform.OS === "android" ? 18 : 16,
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
    padding: 10,
    borderLeftColor: "red",
    borderLeftWidth: 10,
  },
});

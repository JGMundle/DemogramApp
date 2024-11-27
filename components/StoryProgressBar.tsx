import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import axios from "axios";

type storyItem = {id: number, duration: number}
interface Props {
    storyItems: storyItem[]
}
const StoryProgressBar = () => {

    

    const storyItems = [
      { id: 1, duration: 10 }, // 0 + 10 = 10
      { id: 2, duration: 8 }, // 10 + 8 = 18
      { id: 3, duration: 9 }, // 18 + 9 = 27
      { id: 4, duration: 7 }, // 27 + 7 = 34
      { id: 5, duration: 4 }, // 34 + 4 = 38
    ];

    const totalStoryDuration = storyItems.reduce(
      (sum, story) => sum + story.duration,
      0
    );

  const progressValues = storyItems.map(() => useSharedValue(0)); //Animation timing is set to zero

  useEffect(() => {
    storyItems.forEach((story, index) => {
      const duration = (story.duration / totalStoryDuration) * 100; //* by 100 makes the duration a %

      //Animate our progress bar
      progressValues[index].value = withTiming(duration, {
        duration: story.duration * 1000, //* 1000 makes the value into seconds instead of ms
        easing: Easing.linear,
      });
    });
  }, []);
  return (
    <View style={styles.container}>
          {storyItems.map((story, index) => (
              <Animated.View key={story.id} style={[styles.progressBar, {width: progressValues[index]}]}>
                  
          </Animated.View>
      ))}
    </View>
  );
};

export default StoryProgressBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 4,
        marginVertical: 10
    },
    progressBar: {
        backgroundColor: "#ccc",
        marginHorizontal: 2,
        borderRadius: 2
    }
});

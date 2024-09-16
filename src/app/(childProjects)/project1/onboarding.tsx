import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  SlideInRight,
  SlideOutLeft,
  StretchInX,
  StretchOutY,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { ONBOARIDNG_DATA } from "@data/onboarding/item";

const onBoardingData = ONBOARIDNG_DATA;

export default function OnboardingScreeen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onBoardingData[screenIndex];

  const handleContinue = () => {
    const isLastScreen = screenIndex === onBoardingData.length - 1;
    if (isLastScreen) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const handleBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      return;
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const handleSkip = () => {
    setScreenIndex(onBoardingData.length - 1);
  };

  const swipeRight = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(handleContinue);

  const swipeLeft = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(handleBack);

  const composed = Gesture.Simultaneous(swipeLeft, swipeRight);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <GestureDetector gesture={composed}>
        <Animated.View style={styles.pageContent} key={screenIndex}>
          <View style={styles.stepIndicatorContainer}>
            {onBoardingData.map((item, index) => {
              return (
                <View
                  key={`step-${item.id}`}
                  style={[
                    styles.stepIndicator,
                    screenIndex === index && styles.activeStepIndicator,
                  ]}
                ></View>
              );
            })}
          </View>
          <Animated.View entering={ZoomIn} exiting={ZoomOut}>
            <FontAwesome5
              name={data.icon}
              size={180}
              color="#e3da81"
              style={styles.icon}
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.text}
            >
              {data.title}
            </Animated.Text>

            <Animated.Text
              entering={StretchInX}
              exiting={StretchOutY}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonRow}>
              <Pressable onPress={handleSkip}>
                <Text style={styles.buttonText}>Skip</Text>
              </Pressable>
              <Pressable onPress={handleContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: {
    gap: 20,
    padding: 20,
    flex: 1,
  },
  footer: {
    marginTop: "auto",
    gap: 10,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  stepIndicator: {
    flex: 1,
    backgroundColor: "grey",
    height: 4,
    borderRadius: 2,
  },
  activeStepIndicator: { backgroundColor: "#e3da81" },
  icon: {
    alignSelf: "center",
    marginTop: 80,
  },
  text: {
    color: "#FDFDFD",
    fontFamily: "InterBold",
    fontSize: 50,
  },
  description: {
    fontSize: 14,
    color: "#FDFDFD",
    fontFamily: "InterRegular",
    lineHeight: 28,
    letterSpacing: 1.2,
  },
  buttonRow: {
    gap: 24,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#313135",
  },
  buttonText: {
    color: "#FDFDFD",
    padding: 14,
    paddingHorizontal: 20,
    fontFamily: "InterSemi",
  },
});

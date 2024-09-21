import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appColors } from "@app/(childProjects)/project3/styles/constants";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isGray?: boolean;
  isBlue?: boolean;
  isLarge?: boolean;
  isDanger?: boolean;
  mode: string;
}

const CalculatorButton = ({
  title,
  isBlue,
  isGray,
  isDanger,
  isLarge,
  mode,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              mode === "light" ? appColors.dark : appColors.light,
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: mode === "light" ? appColors.light : appColors.dark },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 80,
    width: 80,
    backgroundColor: "#333333",
    borderRadius: 20,
    margin: 4,
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
  },
  text: {
    color: "white",
    fontSize: 42,
    textAlign: "center",
  },
});

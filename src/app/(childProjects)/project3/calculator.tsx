import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import CalculatorButton from "@components/button/CalculatorButton";
import ThemeContext from "./context/ThemeContext";
import { appColors } from "./styles/constants";
import { SwitchButton } from "@components/switch/Switch";

const CalculatorHomeScreen = () => {
  const [theme, setTheme] = useState("light");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [displayHistory, setDisplayHistory] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const toggleSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const clearDisplay = () => {
    setDisplayHistory("");
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
  };

  const clearNumAndOperator = (result: string) => {
    setFirstNumber("");
    setOperator("");
    setSecondNumber("");
    if (result.includes(".")) {
      setResult(parseFloat(result).toFixed(2));
    } else {
      setResult(result);
    }
  };

  const getResults = () => {
    let firstNum;
    let secondNum;
    if (firstNumber.includes(".")) {
      firstNum = parseFloat(firstNumber);
    } else {
      firstNum = parseInt(firstNumber);
    }
    if (secondNumber.includes(".")) {
      secondNum = parseFloat(secondNumber);
    } else {
      secondNum = parseInt(secondNumber);
    }

    if (operator === "+") {
      const result = secondNum + firstNum + "";
      clearNumAndOperator(result);
    } else if (operator === "-") {
      const result = secondNum - firstNum + "";
      clearNumAndOperator(result);
    } else if (operator === "*") {
      const result = secondNum * firstNum + "";
      clearNumAndOperator(result);
    } else if (operator === "/") {
      const result = secondNum / firstNum + "";
      clearNumAndOperator(result);
    } else if (operator === "%") {
      const result = (secondNum % firstNum) + "";
      clearNumAndOperator(result);
    } else {
      setResult("");
    }
  };

  const handleNumbers = (number: string) => {
    if (result.length) {
      clearDisplay();
    }

    if (firstNumber.length < 10) {
      if (number === "." && firstNumber.includes(".")) return;
      setFirstNumber(firstNumber + number);
      if (result.length) {
        setDisplayHistory(number);
      } else {
        setDisplayHistory(displayHistory + number);
      }
    }
  };

  const handleOperators = (operators: string) => {
    if (operators === "AC") {
      clearDisplay();
      return;
    }
    if (firstNumber.length === 0 && secondNumber.length === 0) return;
    if (result.length) {
      setDisplayHistory("");
    } else if (operators === "+/-") {
      setDisplayHistory(parseInt(displayHistory) * -1 + "");
    } else {
      setDisplayHistory(displayHistory + operators);
    }
    if (operators === "⌫") {
      setDisplayHistory(displayHistory.slice(0, -1));
      if (firstNumber.length > 0) {
        setFirstNumber(firstNumber.slice(0, -1));
      } else if (secondNumber.length > 0) {
        setSecondNumber(secondNumber.slice(0, -1));
      } else {
        setOperator("");
      }
    } else if (operators === "=") {
      getResults();
    } else if (operators === "+/-") {
      if (firstNumber.length > 0) {
        setFirstNumber(parseInt(firstNumber) * -1 + "");
      } else if (secondNumber.length > 0) {
        setSecondNumber(parseInt(secondNumber) * -1 + "");
      }
    } else {
      setOperator(operators);
      setSecondNumber(firstNumber);
      setFirstNumber("");
    }
  };

  const handleButtonPress = (title: string) => {
    const operators = ["+", "-", "*", "/", "=", "%", "⌫", "AC", "+/-"];
    if (operators.includes(title)) {
      handleOperators(title);
    } else {
      handleNumbers(title);
    }
  };
  return (
    <ThemeContext.Provider value={theme}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: appColors.dark }]
        }
      >
        <View style={styles.switchContainer}>
          <SwitchButton
            value={theme === "light"}
            onValueChange={toggleSwitch}
          />
        </View>
        <View style={styles.calculatorContainer}>
          {/* Display */}
          <View
            style={[
              styles.displayContainer,
              {
                backgroundColor:
                  theme === "light" ? appColors.dark : appColors.light,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
                color: "grey",
              }}
            >
              {displayHistory}
            </Text>

            {(firstNumber.length > 0 || secondNumber.length > 0) && (
              <View style={styles.displaySmallTextContainer}>
                <Text
                  style={[
                    styles.displayTextSmall,
                    {
                      color:
                        theme === "light" ? appColors.light : appColors.dark,
                    },
                  ]}
                >
                  {secondNumber}
                </Text>
                <Text
                  style={[
                    styles.displayTextSmall,
                    {
                      color:
                        theme === "light" ? appColors.light : appColors.dark,
                    },
                  ]}
                >
                  {operator}
                </Text>
                <Text
                  style={[
                    styles.displayTextSmall,
                    {
                      color:
                        theme === "light" ? appColors.light : appColors.dark,
                    },
                  ]}
                >
                  {firstNumber}
                </Text>
              </View>
            )}

            <View style={styles.displayBigTextContainer}>
              <Text
                style={[
                  styles.displayTextBig,
                  {
                    color: theme === "light" ? appColors.light : appColors.dark,
                  },
                ]}
              >
                {result}
              </Text>
            </View>
          </View>
          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <View style={styles.keypadContainer}>
              {Row1.map((item) => (
                <CalculatorButton
                  mode={theme}
                  onPress={() => handleButtonPress(item.title)}
                  key={item.id}
                  title={item.title}
                  isGray={true}
                />
              ))}
            </View>
            <View style={styles.keypadContainer}>
              {Row2.map((item) => (
                <CalculatorButton
                  mode={theme}
                  onPress={() => handleButtonPress(item.title)}
                  key={item.id}
                  title={item.title}
                />
              ))}
            </View>
            <View style={styles.keypadContainer}>
              {Row3.map((item) => (
                <CalculatorButton
                  mode={theme}
                  onPress={() => handleButtonPress(item.title)}
                  key={item.id}
                  title={item.title}
                />
              ))}
            </View>
            <View style={styles.keypadContainer}>
              {Row4.map((item) => (
                <CalculatorButton
                  mode={theme}
                  onPress={() => handleButtonPress(item.title)}
                  key={item.id}
                  title={item.title}
                />
              ))}
            </View>

            <View style={styles.keypadContainer}>
              {Row5.map((item) => (
                <CalculatorButton
                  mode={theme}
                  onPress={() => handleButtonPress(item.title)}
                  key={item.id}
                  title={item.title}
                />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default CalculatorHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.light,
    alignItems: "center",
    justifyContent: "space-between",
  },

  switchContainer: {
    flex: 0.1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  calculatorContainer: {
    flex: 0.9,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  displayContainer: {
    height: "25%",
    width: "95%",
    backgroundColor: "#333333",
    padding: 10,
    borderRadius: 20,
    marginBottom: 24,
  },

  displaySmallTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  displayBigTextContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  displayTextBig: {
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "right",
  },

  displayTextSmall: {
    fontSize: 24,
    textAlign: "right",
  },

  buttonContainer: {
    height: "70%",
  },

  keypadContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
  },
});

const Row1 = [
  {
    id: 1,
    title: "AC",
  },
  {
    id: 2,
    title: "+/-",
  },
  {
    id: 3,
    title: "%",
  },
  {
    id: 4,
    title: "/",
  },
];
const Row2 = [
  {
    id: 1,
    title: "7",
  },
  {
    id: 2,
    title: "8",
  },
  {
    id: 3,
    title: "9",
  },
  {
    id: 4,
    title: "*",
  },
];
const Row3 = [
  {
    id: 1,
    title: "4",
  },
  {
    id: 2,
    title: "5",
  },
  {
    id: 3,
    title: "6",
  },
  {
    id: 4,
    title: "-",
  },
];
const Row4 = [
  {
    id: 1,
    title: "1",
  },
  {
    id: 2,
    title: "2",
  },
  {
    id: 3,
    title: "3",
  },
  {
    id: 4,
    title: "+",
  },
];
const Row5 = [
  {
    id: 1,
    title: "0",
  },
  {
    id: 2,
    title: ".",
  },
  {
    id: 3,
    title: "⌫",
  },
  {
    id: 4,
    title: "=",
  },
];

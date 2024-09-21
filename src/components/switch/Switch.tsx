import { Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface SwitchButtonProps {
  onValueChange: () => void;
  value: boolean;
}

const defaultStyles = {
  bgGradientColors: ["#edb588", "#edb588"],
  headGradientColors: ["#edb588", "#edb588"],
};
const activeStyles = {
  bgGradientColors: ["#979690", "#4b4a45"],
  headGradientColors: ["#edb588", "#edb588"],
};

export function SwitchButton(props: Readonly<SwitchButtonProps>) {
  const { value, onValueChange } = props;

  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value * 24, {
          damping: 24,
          stiffness: 400,
        }),
      },
    ],
  }));

  const translate = () => {
    onValueChange();
    translateX.value = value ? 1.5 : 0;
  };

  const currentStyles = value ? activeStyles : defaultStyles;
  return (
    <Pressable style={styles.pressable} onPress={translate}>
      <LinearGradient
        colors={
          value
            ? currentStyles.bgGradientColors
            : defaultStyles.bgGradientColors
        }
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0.5 }}
      >
        <Animated.View style={[styles.circle, animatedStyles]}></Animated.View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 60,
  },
  backgroundGradient: {
    borderRadius: 16,
  },

  button: {
    borderRadius: 5,
  },

  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    position: "relative",
    borderRadius: 50,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: "#fff",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

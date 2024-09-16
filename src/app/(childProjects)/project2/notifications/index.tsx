import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import * as Notifications from "expo-notifications";

const NotificationsHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          console.log("pressed");
          await sendPushNotification();
        }}
      />
    </SafeAreaView>
  );
};

async function sendPushNotification() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Original Title",
      body: "And here is the body!",
      data: { someData: "goes here" },
    },
    trigger: { seconds: 1 },
  });
}

export default NotificationsHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9ede3",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

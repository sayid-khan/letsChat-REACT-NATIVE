// @refresh reset
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";
import AsyncStorage from "@react-native-community/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4XF-W8ksj-TNDHGrSEzaP2Z7ofbEEIx8",
  authDomain: "let-s-chat-78d79.firebaseapp.com",
  projectId: "let-s-chat-78d79",
  storageBucket: "let-s-chat-78d79.appspot.com",
  messagingSenderId: "529640592073",
  appId: "1:529640592073:web:49d1404d8f0f17f5307318",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// to ignore yellowbox warnings
LogBox.ignoreWarnings(["Setting a timer for a long period of time"]);

export default function App() {
  const [user, setuser] = useState(null);
  const [name, setname] = useState("");

  useEffect(() => {
    readUser();
  }, []);

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setuser(JSON.parse(user));
    }
  }
  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name..."
          value={name}
          onTextInput={setname}
        />

        <Button title="Enter the chat" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>We have a user!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: "gray",
  },
});

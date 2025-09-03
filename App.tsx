import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://i.ibb.co/Sc7D9cV/monopoly-bg.jpg", // Monopoly-themed background (free asset)
      }}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <Text style={styles.title}>🎲 Welcome to Monopoly project demo learn something 🎲</Text>
        <Text style={styles.subtitle}>Buy · Sell · Trade · Win!</Text>

        <TouchableOpacity style={styles.startBtn} onPress={() => {}}>
          <Text style={styles.startText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)", // dark overlay
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#f1c40f",
    marginBottom: 30,
    fontWeight: "600",
  },
  startBtn: {
    backgroundColor: "#e74c3c",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  startText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>
        Open up App.js to start working on your app
      </Text>
      <Text style={styles.blue}>blue</Text>
      <StatusBar style="auto" />
      <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }}>
        <Text style={{ backgroundColor: "red" }}>Fuck you</Text>
      </View>
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
  red: {
    color: "red",
  },
  blue: {
    color: "blue",
  },
});

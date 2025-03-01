import { StyleSheet, Text, View, Image } from "react-native";
import FileLogo from "@/assets/images/post-it.png";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={FileLogo} style={styles.image} />
      <Text style={styles.title}>Welcome to Rajan's Notes App</Text>
      <Text style={styles.subtitle}>
        Capture your thoughts anytime, anywhere
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;

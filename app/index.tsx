import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import FileLogo from "@/assets/images/post-it.png";

const HomeScreen = () => {
  const router = useRouter();

  const handleClick = () => router.push("/notes");

  return (
    <View style={styles.container}>
      <Image source={FileLogo} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subtitle}>
        Capture your thoughts anytime, anywhere
      </Text>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
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
  btn: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

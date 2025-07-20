import AppButton from "@/components/Button";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={require("@/assets/images/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}> Sell what your don&apos;t need </Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => router.push("/listing/page")}
          />
          <AppButton
            btnColor="secondary"
            title="Register"
            onPress={() => console.log("Register pressed")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

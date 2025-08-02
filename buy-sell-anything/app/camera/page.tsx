import color from "@/config/color";
import useAccessUserLocation from "@/hooks/useAccessUserLocation";
import useMediaLibraryPermission from "@/hooks/useMediaLibraryPermission";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function MultipleImagePicker() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[] | null>(
    null
  );
  const hasPermission = useMediaLibraryPermission();
  const location = useAccessUserLocation();
  console.log(location);

  const selectImage = async () => {
    if (!hasPermission) {
      alert("Permission not granted!");
      return;
    }

    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        selectionLimit: 10,
        allowsMultipleSelection: true,
        quality: 1,
      });

      if (!canceled) setImages(assets);
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  const handleDelete = (index: number) => {
    Alert.alert("Delete Image", "Are your sure you want to delete this image", [
      { text: "No", onPress: () => {} },
      {
        text: "Yes",
        onPress: () => {
          const updatedImages = images?.filter((_, i) => i !== index) ?? null;
          setImages(updatedImages);
        },
      },
    ]);
  };

  return (
    <ScrollView horizontal>
      <SafeAreaView style={styles.container}>
        {images?.length &&
          images.map((image, index) => (
            <View style={styles.imageContainer} key={index}>
              <Image
                source={{ uri: image.uri }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                }}
              />

              <TouchableWithoutFeedback onPress={() => handleDelete(index)}>
                <MaterialCommunityIcons
                  name="trash-can"
                  size={20}
                  color={color.medium}
                  style={styles.trashIcon}
                />
              </TouchableWithoutFeedback>
            </View>
          ))}
        <TouchableWithoutFeedback onPress={selectImage}>
          <View style={styles.camera}>
            <MaterialCommunityIcons
              name="camera"
              size={40}
              color={color.medium}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  camera: {
    backgroundColor: color.light,
    width: 100,
    height: 100,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: color.white,
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: "hidden",
    backgroundColor: "green",
    borderRadius: 10,
  },
  trashIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: color.danger,
    color: color.secondary,
    borderRadius: 2,
    padding: 3,
  },
});

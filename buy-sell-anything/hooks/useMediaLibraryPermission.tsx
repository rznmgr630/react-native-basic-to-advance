import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

const useMediaLibraryPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const { granted } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasPermission(granted);

        if (!granted) {
          alert("You need to enable permission to access the media library.");
        }
      } catch (error) {
        console.error("Permission request failed:", error);
        setHasPermission(false);
      }
    };

    requestPermission();
  }, []);

  return hasPermission;
};

export default useMediaLibraryPermission;

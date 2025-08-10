import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useAccessUserLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          alert("You need to enable permission to access the media library.");
        } else {
          const {
            coords: { latitude, longitude },
          } = await Location.getCurrentPositionAsync();
          setLocation({ latitude, longitude });
        }
      } catch (error) {
        console.error("Permission request failed:", error);
      }
    };

    requestPermission();
  }, []);

  return location;
};

export default useAccessUserLocation;

import ListItem from "@/components/ListItem";
import color from "@/config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, StyleSheet, View } from "react-native";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      color: color.primary,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      color: color.secondary,
    },
  },
];

const Account = () => {
  return (
    <View>
      <ListItem
        title="Rajan Midun Magar"
        subTitle="rajan@gmail.com"
        image={require("@/assets/images/owner.jpg")}
        style={{ backgroundColor: color.white }}
      />

      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <MaterialCommunityIcons
                  name={item.icon.name as any}
                  size={24}
                  color="white"
                  style={{
                    backgroundColor: item.icon.color,
                    borderRadius: 50,
                    padding: 10,
                  }}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Logout"
        style={styles.logoutContainer}
        IconComponent={
          <MaterialCommunityIcons
            name={"logout"}
            size={24}
            color="white"
            style={{
              backgroundColor: "#ffe66d",
              borderRadius: 50,
              padding: 10,
            }}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginVertical: 20,
    backgroundColor: color.white,
  },
  logoutContainer: {
    backgroundColor: color.white,
  },
});

export default Account;

import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppScreen from "../components/AppScreen";
import AppListItem from "../components/AppListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <AppListItem
          title="Abdalla AARshan"
          subTitle="aarshandesigns@gmail.com"
          image={require("../assets/aarshan.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <AppListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 10,
  },
});
export default AccountScreen;

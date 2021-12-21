import React, { useState } from "react";
import { FlatList } from "react-native";

import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/aarshan.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/aarshan.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete the message from array
    // then delete from the server

    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message clicked ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/aarshan.png"),
            },
          ])
        }
      />
    </AppScreen>
  );
}

export default MessagesScreen;

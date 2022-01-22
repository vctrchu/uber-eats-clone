import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Chilaquiles",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$14.50",
        image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Waffles",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Fries",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    },
];

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems
                restaurantName={route.params.name}
                foods={foods}
                marginLeft={10}
            />
            <ViewCart navigation={navigation} />
        </View>
    );
}

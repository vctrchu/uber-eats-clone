import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

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

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            iconStyle={{
                                borderColor: "lightgray",
                                borderRadius: 8,
                            }}
                            fillColor="green"
                        />
                        <FoodInfo
                            title={food.title}
                            description={food.description}
                            price={food.price}
                        />
                        <FoodImage image={food.image} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = ({ title, description, price }) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
    </View>
);

const FoodImage = ({ image }) => (
    <View>
        <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
);

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});

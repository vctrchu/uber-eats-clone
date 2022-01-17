import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://www.narcity.com/media-library/this-toronto-restaurant-was-named-the-best-designed-in-the-americas-the-photos-prove-it.jpg?id=27703081&width=1245&quality=85&coordinates=45%2C0%2C45%2C0&height=700",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1114,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantsData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                    onPress={() =>
                        navigation.navigate("RestaurantDetail", {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            reviews: restaurant.review_count,
                            rating: restaurant.rating,
                            categories: restaurant.categories,
                        })
                    }
                >
                    <View
                        style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: "white",
                        }}
                    >
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo
                            name={restaurant.name}
                            rating={restaurant.rating}
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="white"
            />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "grey" }}>30-45 min</Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);

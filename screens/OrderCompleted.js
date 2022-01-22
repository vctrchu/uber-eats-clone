import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import firebase from "../firebase";

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Tandoori Chicken",
                description:
                    "Amazing Indian dish with tenderloin chicken off the sizzles",
                price: "$19.20",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
            },
        ],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });
        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
                <LottieView
                    style={{
                        height: 100,
                        alignSelf: "center",
                        marginBottom: 30,
                    }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your order at {restaurantName} has been placed for{" "}
                    {totalUSD}
                </Text>
                <ScrollView>
                    <MenuItems foods={lastOrder.items} hideCheckbox />
                </ScrollView>
                <LottieView
                    style={{
                        height: 200,
                        alignSelf: "center",
                        marginBottom: 30,
                    }}
                    source={require("../assets/animations/cooking.json")}
                    autoPlay
                    speed={0.5}
                />
            </View>
        </SafeAreaView>
    );
}

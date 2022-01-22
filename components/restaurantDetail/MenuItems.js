import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function MenuItems({
    restaurantName,
    foods,
    hideCheckbox,
    marginLeft,
}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue,
            },
        });
    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );
    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        {hideCheckbox ? (
                            <></>
                        ) : (
                            <BouncyCheckbox
                                iconStyle={{
                                    borderColor: "lightgray",
                                    borderRadius: 8,
                                }}
                                fillColor="green"
                                onPress={(checkboxValue) =>
                                    selectItem(food, checkboxValue)
                                }
                                isChecked={isFoodInCart(food, cartItems)}
                            />
                        )}
                        <FoodInfo
                            title={food.title}
                            description={food.description}
                            price={food.price}
                        />
                        <FoodImage
                            image={food.image}
                            marginLeft={marginLeft ? marginLeft : 0}
                        />
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

const FoodImage = ({ image, marginLeft }) => (
    <View>
        <Image
            source={{ uri: image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
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

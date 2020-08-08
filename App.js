import React from "react"
import { StyleSheet, Image, View, Dimensions, Text } from "react-native";
import picMongo from "./assets/mongo.jpg"
import picMongo2 from "./assets/mongo2.jpg"

export default function App(){
    return(
        <View style={styles.page}>
            <Text style={styles.text}>Cat Spam!</Text>
            <Image style={styles.image} source={picMongo}></Image>
            <Image style={styles.image} source={picMongo2}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        flex: 0.2,
        fontSize: 40,
        marginTop: 40,
        padding: 5
    },
    image: {
        flex: 1,
        borderRadius: 50,
        margin: 10,
        width: Dimensions.get("window").width - 10
    }
});

// css-tricks.com for a guide to Flexbox
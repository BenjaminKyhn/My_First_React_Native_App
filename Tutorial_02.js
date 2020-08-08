import React from "react"
import { StyleSheet, Text, View } from "react-native";

export default function App(){
    return(
        <View style={styles.page}>
            <Text style={styles.text}>Red</Text>
            <Text style={[styles.text, styles.selectedText]}>Green</Text>
            <Text style={styles.text}>Blue</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1, // 1 evenly distributes the elements in the given space
        flexDirection: "row", // row, column
        alignItems: "flex-start", // flex-start, flex-end, center, space-between
        justifyContent: "space-around",
        marginTop: 40,
        backgroundColor: "#DDD"
    },
    text: {
        flex: 1,
        fontSize: 22,
        color: "red",
        backgroundColor: "yellow",
        margin: 10,
        padding: 5
    },
    selectedText: {
        alignSelf: "flex-start",
        color: "yellow",
        backgroundColor: "red",
    }
});

// css-tricks.com for a guide to Flexbox
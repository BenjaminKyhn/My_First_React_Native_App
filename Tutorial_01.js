import React from "react"
import { Text, View, ActivityIndicator, ProgressBarAndroid, ProgressViewIOS, Button, Alert, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');

export default function App(){
    const onButtonPress = () => {
        Alert.alert(`${new Date().toLocaleTimeString()} button clicked`);
    }

    return(
        <View style={{ padding: 50 }}>
            {Platform.OS === "ios" && <ProgressViewIOS color="#2196F3"/>}
            {Platform.OS === "android" && (<ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                color="blue"
                progress={0.5}
            />)}
            <ActivityIndicator size="large" color="#0000ff"/>
            <Button title="click me" onPress={onButtonPress}/>
            <Text>OS: {Platform.OS}</Text>
            <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
        </View>
    );

}
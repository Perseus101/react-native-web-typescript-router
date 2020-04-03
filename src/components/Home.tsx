import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { Link } from '../router';

const styles = StyleSheet.create({
    horizontalOuterContainer: { height: '100vh', flexDirection: "row" },
    verticalOuterContainer: { flex: 1, flexDirection:'column' },
    horizontalContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticalContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function Home() {
    let outerContainer;
    let innerContainer;
    if (Platform.OS === "web") {
        outerContainer = styles.horizontalOuterContainer;
        innerContainer = styles.horizontalContainer;
    }
    else {
        outerContainer = styles.verticalOuterContainer;
        innerContainer = styles.verticalContainer;
    }

    return (
        <View style={outerContainer}>
            <View style={innerContainer}>
                <Link to="/users"><Text>Users</Text></Link>
            </View>
            <View style={innerContainer}>
                <Link to="/about"><Text>About</Text></Link>
            </View>
        </View>
    );
};
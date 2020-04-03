import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Link } from '../router';

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default function About() {
    return (
        <View style={styles.container}>
            <Text>About</Text>
            <Link to="/"><Text>Home</Text></Link>
        </View>
    );
};

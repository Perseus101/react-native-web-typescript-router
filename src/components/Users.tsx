import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Link } from '../router';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default function Users() {
    return (
        <View style={styles.container}>
            <Text>Users</Text>
            <Link to="/"><Text>Home</Text></Link>
        </View>
    );
};

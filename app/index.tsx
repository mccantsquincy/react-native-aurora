import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Auora</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: 'blue' }}>Go to profile</Link>
        </View>
    )
}


import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        return () => { };
    }, [])
    return (
        <SafeAreaView>
            <View>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}
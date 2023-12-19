import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader';

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
            <StatusBar style="auto" />
            <HomeHeader />
        </SafeAreaView>
    )
}
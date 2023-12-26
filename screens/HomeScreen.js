import { SafeAreaView, ScrollView, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader';
import Categories from '../components/Categories';
import Row from '../components/Row';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        return () => { };
    }, [])
    return (
        <SafeAreaView style={styles.pTopAndroid} className="bg-white">
            <StatusBar style="auto" />
            <HomeHeader />
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
                <Categories />
                <Row id='1' heading='Featured' desc='Paid Placements from our partners'/>
                <Row id='12' heading='Tasty Discounts' desc="Everyone's been enjoying these jucy discounts!"/>
                <Row id='123' heading='Offers near you' desc='Why not support your local restaurant tonight!'/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pTopAndroid: {
        paddingTop: Platform.OS === 'android' ? 40 : 0
    }
});

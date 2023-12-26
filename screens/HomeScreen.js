import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader';
import Categories from '../components/Categories';
import {ArrowRightIcon} from 'react-native-heroicons/outline'

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
                <View className='px-2 my-2 flex-row items-center justify-between'>
                    <View>
                        <Text className="text-xl font-bold">Featured</Text>
                        <Text className='text-gray-400'>Paid Placements from our partners</Text>
                    </View>
                    <ArrowRightIcon size={20} color='#00ccbb'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pTopAndroid: {
        paddingTop: Platform.OS === 'android' ? 40 : 0
    }
});

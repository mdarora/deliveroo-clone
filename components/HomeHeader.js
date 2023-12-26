import { View, Text, Image, TextInput } from 'react-native'
import React from 'react';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';

export default function HomeHeader() {
    return (
        <View className="bg-white p-2">
            <View className="flex-row items-center gap-2">
                <Image
                    source={require("../assets/hh-img.png")}
                    className="w-7 h-7 p-4 bg-gray-300 rounded-full"
                />
                <View className='flex-1'>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color={'#00ccbb'} />
                    </Text>
                </View>
                    <UserIcon size={35} color={'#00ccbb'} />
            </View>

            <View className="flex-row items-center justify-between space-x-2 my-2">
                <View className="bg-gray-200 flex-row space-x-2 p-3 flex-1">
                    <MagnifyingGlassIcon size={20} color="gray"/>
                    <TextInput placeholder='Restaurants & Cuisines' keyboardType='default'/>
                </View>
                <AdjustmentsVerticalIcon size={20} color="#00ccbb"/>
            </View>
        </View>
    )
}
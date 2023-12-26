import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import React from 'react'

export default function RestaurantCard({
    id, imgUrl, title, rating, genre, address, short_desc, dishes, long, lat
}) {
    return (
        <TouchableOpacity style={{elevation:5}} className='rounded-sm shadow bg-white mr-3'>
            <View>
                <Image source={{ uri: imgUrl }} className='h-32 w-64 rounded-sm' />
                <View className='px-2 pb-4'>
                    <Text className='text-2xl font-bold py-2'>{title}</Text>
                    <View className='flex-row gap-1 items-center'>
                        <StarIcon size={20} color='green' />
                        <Text className='text-gray-500'>
                            <Text className='text-green-800'>{rating}</Text> . {genre}
                        </Text>
                    </View>
                    <View className='flex-row gap-1 items-center'>
                        <MapPinIcon size={20} color='gray' />
                        <Text className='text-gray-500'>Nearby . {address}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
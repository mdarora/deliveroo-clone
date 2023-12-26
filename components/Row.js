import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
const image = 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg';

export default function Row({ id, heading, desc }) {
    return (
        <View className='my-2'>
            <View className='px-2 my-2 flex-row items-center justify-between'>
                <View>
                    <Text className="text-xl font-bold">{heading}</Text>
                    <Text className='text-gray-400'>{desc}</Text>
                </View>
                <ArrowRightIcon size={20} color='#00ccbb' />
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 8
                }}
            >
                <RestaurantCard 
                    id='1'
                    imgUrl={image}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='japanese'
                    address='123 Main street'
                    short_desc='this is a test desc'
                    dishes={[]}
                    long={0.34554}
                    lat={0.45678}
                />
                <RestaurantCard 
                    id='1'
                    imgUrl={image}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='japanese'
                    address='123 Main street'
                    short_desc='this is a test desc'
                    dishes={[]}
                    long={0.34554}
                    lat={0.45678}
                />
                <RestaurantCard 
                    id='1'
                    imgUrl={image}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='japanese'
                    address='123 Main street'
                    short_desc='this is a test desc'
                    dishes={[]}
                    long={0.34554}
                    lat={0.45678}
                />
            </ScrollView>
        </View>
    )
}
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Category from './Category';
const image = 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg';

export default function Categories() {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 8,
            paddingTop: 8
        }}
    >
      <Category imgUrl={image} title='Category 1'/>
      <Category imgUrl={image} title='Category 2'/>
      <Category imgUrl={image} title='Category 3'/>
      <Category imgUrl={image} title='Category 4'/>
      <Category imgUrl={image} title='Category 5'/>
      <Category imgUrl={image} title='Category 6'/>
      <Category imgUrl={image} title='Category 7'/>
      <Category imgUrl={image} title='Category 8'/>
    </ScrollView>
  )
}
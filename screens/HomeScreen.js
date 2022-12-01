import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[]);

    return(
        <SafeAreaView className="bg-white flex-1 relative">

            <View className="flex-row px-6 mt-10 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B text-3xl font-semibold">Travel</Text>
            </View>

            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3C6072] text-[42px]">Enjoy your trip with</Text>
                <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
                
                <Text className="text-[#3C6072] text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Text>
            </View>

            <View className="w-[280px] h-[280px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-36"></View>
            <View className="w-[250px] h-[250px] bg-[#E99265] rounded-full absolute -bottom-14 -left-20"></View> 

            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out" 
                    source={HeroImage}
                    className="w-60 h-80 object-cover mt-20"
                />

                <TouchableOpacity
                    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full"
                    onPress={() => navigation.navigate('Discover')}
                >
                    <Animatable.View animation={"pulse"} easing={"ease-in-out"} iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[15px] font-semibold">Explore</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;
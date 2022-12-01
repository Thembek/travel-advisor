import React, { useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import { FontAwesome } from '@expo/vector-icons';

import MenuContainer from '../components/MenuContainer';
import ItemCardContainer from '../components/ItemCardContainer';

const Discover = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

    return(
        <SafeAreaView className="flex-1 bg-white relative mt-6">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B]">Discover</Text>
                    <Text className="text-[#5327283] text-[36px]">the beauty today</Text>
                </View>

                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image 
                        source={ Avatar }
                        className="w-full h-full rounded-md object-cover"
                    />
                </View> 
            </View>

            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete 
                    GooglePlacesDetailsQuery={{ fields: 'geometry '}}
                    placeholder="Search"
                    fetchDetails={true}

                    onPress={(data, details = null) => {
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: process.env.GOOGLE_KEY,
                        language: 'en',
                    }}
                />
            </View>

            { isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0B646B" />
                </View>
            ) : (
                <ScrollView>
                <View className="flex-row items-center justify-between px-3 mt-8">
                    <MenuContainer 
                        key={"hotel"}
                        title="Hotels"
                        imageSrc={Hotels}
                        type={type}
                        seType={setType}
                    />

                    <MenuContainer 
                        key={"attrations"}
                        title="Attractions"
                        imageSrc={Attractions}
                        type={type}
                        seType={setType}
                    />

                    <MenuContainer 
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                        type={type}
                        seType={setType}
                    />
                </View>

                <View>
                    <View className="flex-row items-center justify-between px-4 mt-8">
                        <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
                        <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                            <Text className="text-[#A0C4C7] text-[20px] font-bold">Adventure</Text>
                            <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                        </TouchableOpacity>
                    </View>

                    <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                        {mainData?.length > 0 ? (
                            <>
                                <ItemCardContainer key={"101"} imageSrc={"https://images.unsplash.com/photo-1556383166-eded0173b7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"} title="Something a very big" location="Beijing" />
                                <ItemCardContainer key={"102"} imageSrc={"https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"} title="Sample" location="Carribean" />
                            </>
                        ) : (
                         <>
                            <View className="w-full h-[300px] items-center space-y-8">
                                <Image 
                                    source={NotFound}
                                    className="w-32 h-32 object-cover"
                                />

                                <Text className="text-2xl text-[#428288] font-semibold">
                                    Opps...No Data Found
                                </Text>
                            </View>
                         </>   
                        )                    
                        }
                        
                    </View>
                </View>
            </ScrollView>
            )}
        </SafeAreaView>
    );
} 

export default Discover;
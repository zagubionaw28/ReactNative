import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import Icon from './components/Icon';
import Categories from "../Categories";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
// import FeaturedRow from "../FeaturedRow";
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions( {
        headerShown: false,
      });
  }, []);

  return (
  <SafeAreaView className="bg-white pt-10">
      <View className="flex-row pb-3 items-center mx-1 space-x-2 p-2">
        <Image
            source={{
              uri:"https://links.papareact.com/wru",

            }}
            className="h-10 w-10 bg-gray-300 p-4 rounded-full"
          />

        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl ">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="#00CCBB"/>
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
          <Categories />



        {/* Featured */}
      <View className="flex-row tems-center space-x-2 pb-2 mx-2 pt-4 h-100">
        <Text className="font-bold text-lg">
          Fetured                                                              </Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <View>
        <Text className="text-xs text-gray-500 px-2 pb-2">Paid placements from our partners</Text>
      </View>
      <Image
            source={{
              uri:"https://podroze.smcloud.net/t/photos/t/139278/kuchnia-tajska_1021724.jpg",

            }}
            className=" bg-gray-300 p-20"
          />

        {/* Tasty Discounts */}
      <View className="flex-row tems-center space-x-2 pb-2 mx-2 pt-4">
      <Text className="font-bold text-lg">
        Paid placements from our partneres           </Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <View>
        <Text className="text-xs text-gray-500 px-2 pb-2">Paid placements from our partners</Text>
      </View>
      <Image
            source={{
              uri:"https://cdn.pkt.pl/f-82188-.jpg",
        

            }}
            className="h-50 w-50 bg-gray-300 p-20"
          />

        {/* Offers near you */}
      <View className="flex-row tems-center space-x-2 pb-2 mx-2 pt-4">
        <Text className="font-bold text-lg">
            Offer near you                                                  </Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <View>
        <Text className="text-xs text-gray-500 px-2 pb-2">Paid placements from our partners</Text>
      </View>
      <Image
            source={{
              uri:"https://szefsmaku.pl/wp-content/uploads/2022/05/kuchnia-tajska.jpg",

            }}
            className="h-50 w-50 bg-gray-300 p-20"
          />
      </ScrollView>
  </SafeAreaView>
  );
};

export default HomeScreen;
//rnfe
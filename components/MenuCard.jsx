import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const MenuCard = ({ title, icon, redirect }) => {
  return (
    <TouchableOpacity
      className="w-[165px] h-[200px] rounded-3xl m-3  bg-gray-200 p-8 justify-center items-center shadow-xl shadow-black"
      onPress={() => router.push(redirect)}
      activeOpacity={0.7}
    >
      <Image source={icon} className="" resizeMode="contain" />
      <Text className="text-primary-200 font-psemibold text-sm mt-3 ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

export default MenuCard;

import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { icons } from "../../constants";

import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#627254",
          },

          headerTintColor: "#fff",

          headerTitleAlign: "center",
          headerRight: () => (
            <ScreenHeaderBtn
              icon={icons.logo}
              handlePress={() => router.push("./home")}
              styles="mr-4"
            />
          ),
        }}
      >
        <Drawer.Screen name="home" options={{ title: "" }} />
        <Drawer.Screen name="citas" options={{ title: "Citas" }} />
        <Drawer.Screen name="clientes" options={{ title: "Clientes" }} />
        <Drawer.Screen name="productos" options={{ title: "Productos" }} />
        <Drawer.Screen name="proveedores" options={{ title: "Proveedores" }} />
        <Drawer.Screen name="movimientos" options={{ title: "Movimientos" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Component/Home/HomeScreen";
import CartScreen from "./Component/Cart/CartScreen";
import MessengerScreen from "./Component/Messenger/MessengerScreen";
import UserScreen from "./Component/User/UserScreen";
import Meat from "./Component/Home/Meat/Meat.js";
import Fish from "./Component/Home/Fish/Fish";
import Vegetables from "./Component/Home/Vegetables/Vegetables";
import Fruit from "./Component/Home/Fruit/Fruit";
import Dry from "./Component/Home/Dry/Dry";
import Belong from "./Component/Home/Belong/Belong";
import Seasonable from "./Component/Home/Seasonable/Seasonable";
import Cake from "./Component/Home/Cake/Cake";
import Drink from "./Component/Home/Drink/Drink";
import Ok from "./Component/OK/Ok";
import Search from "./Component/OK/Search";
import Bell from "./Component/OK/Bell";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart-plus" : "cart-plus";
          } else if (route.name === "Messenger") {
            iconName = focused ? "wechat" : "wechat";
          } else if (route.name === "User") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messenger"
        component={MessengerScreen}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShow: false }}>
        <Stack.Screen
          name="HomeStack"
          component={HomeTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GioHang"
          component={CartScreen}
          options={{ headerTitle:'' }}
        />
        <Stack.Screen
          name="Thit"
          component={Meat}
          options={{
            headerTitle: "Cữa Hàng Thịt",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Ca"
          component={Fish}
          options={{
            headerTitle: "Cữa Hàng Cá",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Rau"
          component={Vegetables}
          options={{
            headerTitle: "Rau Củ",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="TraiCay"
          component={Fruit}
          options={{
            headerTitle: "Trái Cây",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Kho"
          component={Dry}
          options={{
            headerTitle: "Khô",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Thuoc"
          component={Belong}
          options={{
            headerTitle: "Thuốc",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="GiaVi"
          component={Seasonable}
          options={{
            headerTitle: "Gia Vị",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="BanhKeo"
          component={Cake}
          options={{
            headerTitle: "Bánh Kẹo",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="DoUong"
          component={Drink}
          options={{
            headerTitle: "Đồ Uống",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

          <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerTitle:'' }}
        />

<Stack.Screen
          name="Bell"
          component={Bell}
          options={{ headerTitle:'' }}
        />

        <Stack.Screen name="Ok" component={Ok} options={{ headerTitle: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

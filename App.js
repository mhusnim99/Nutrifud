import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, useKeyboardBottomInset } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import katbmi from "./screens/katbmi";
import resep from "./screens/resep";
import profile from "./screens/profile";
import kategori from "./screens/kategori";
import save from "./screens/save";
import notif from "./screens/notif";


// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Resep":
              iconName = "book-outline";
              break;
            case "Kategori":
              iconName = "restaurant-outline";
              break;
            case "Save":
              iconName = "heart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Resep" component={resep} options={noHead} />
      <Tab.Screen name="Kategori" component={kategori} options={noHead}/>
      <Tab.Screen name="Save" component={save} options={noHead}/>
      <Tab.Screen name="Profile" component={profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead}/>
          <Stack.Screen
            name="BMI Kalkulator"
            component={katbmi}
            options={noHead}
          />
          <Stack.Screen
            name="Notifikasi"
            component={notif}
            options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};


export default App;
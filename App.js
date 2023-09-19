import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductsScreen from './screens/ProductsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddNewProductScreen from './screens/AddNewProductScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'NewProduct') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'violet',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={ProductsScreen}/>
        <Tab.Screen name="NewProduct" component={AddNewProductScreen}
          options={{
            tabBarLabel: 'Sell'
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react'
import { StyleSheet } from 'react-native';
import ProductsStack from './screens/ProductsStack';
import AddNewProductScreen from './screens/AddNewProductScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileStack from './screens/ProfileStack';

const Tab = createBottomTabNavigator()

export default function AuthenticatedStack() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
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
            <Tab.Screen name="Home" component={ProductsStack}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen name="NewProduct" component={AddNewProductScreen}
                options={{
                    title: 'Sell Product'
                }}
            />
            <Tab.Screen name="Profile" component={ProfileStack} 
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

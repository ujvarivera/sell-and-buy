import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimaryButton from "../components/PrimaryButton";
import ProductsScreen from "./ProductsScreen";
import ProductScreen from "./ProductScreen";
import EditProductScreen from "./EditProductScreen";

const Stack = createNativeStackNavigator()

export default function ProductsStack({ navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Edit Product" component={EditProductScreen} />
        </Stack.Navigator>
    )
}
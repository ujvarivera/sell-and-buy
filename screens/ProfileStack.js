import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProductScreen from "./EditProductScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator()

export default function ProfileStack({ navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen name="My Profile" component={ProfileScreen} />
            <Stack.Screen name="Edit Product" component={EditProductScreen} />
        </Stack.Navigator>
    )
}
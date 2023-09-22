import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import useUser from "../hooks/useUser";

export default function ProfileScreen({ navigation }) {
    const { logout } = useUser()

    function logoutHandler() {
        logout()
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
            <PrimaryButton title="Logout" onPress={logoutHandler} />
        </View>
    )
}
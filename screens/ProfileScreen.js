import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import useUser from "../hooks/useUser";

export default function ProfileScreen({ navigation }) {
    const { user, logout } = useUser()

    function logoutHandler() {
        logout()
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PrimaryButton title="Logout" onPress={logoutHandler} />
        </View>
    )
}
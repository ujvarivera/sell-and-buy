import { View, Image, FlatList, StyleSheet } from "react-native";
import products from "../data/dummy-data"
import Title from "../components/Title";

export default function ProductsScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Title title="Products" />
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.productContainer}>
                            <Image source={{ uri: item.image }} width={150} height={150} />
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 16,
        color: "violet"
    },
    productContainer: {
        margin: 16
    },
});
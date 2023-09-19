import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import products from "../data/dummy-data"

export default function ProductsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Products</Text>
            <FlatList 
                data={products}
                renderItem={({item}) => {
                    return (
                        <View style={styles.productContainer}>
                            <Image source={{ uri: item.image}} width={100} height={100}/>
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
    productContainer: {
      margin: 16
    },
  });
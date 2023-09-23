import { View, Image, FlatList, StyleSheet, Text, Pressable, ScrollView, SafeAreaView } from "react-native";
import products from "../data/dummy-data"
import Title from "../components/Title";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimaryButton from "../components/PrimaryButton";
import { useLayoutEffect } from "react";

const Stack = createNativeStackNavigator()

function ProductsStack({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            { /* <Title title="Products" /> */ }
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => navigation.navigate("Product", {
                            product: item
                        })} android_ripple={{ color: "violet" }}>
                            <View style={styles.productContainer}>
                                <Image source={{ uri: item.image }} width={150} height={150} />
                                <Text>
                                    { item.title.length > 10 ? 
                                        item.title.substring(0, 10) + '...' :
                                        item.title
                                    }
                                </Text>
                            </View>
                        </Pressable>
                    )
                }}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

function Product({ navigation, route }) {
    const { product } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            title: product.title
        })
    }, [navigation])
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Title title={product.title}/>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <View style={styles.labels}>
                    <Text style={styles.productCategory}>{product.category}</Text>
                    <Text style={styles.productCategory}>{product.price}$</Text>
                </View>
                <Text>{product.description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}


export default function ProductsScreen({ navigation }) {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductsStack} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 16,
        color: 'violet'
    },
    productContainer: {
        margin: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        // width: '100%',
        // height: '100%',
        // resizeMode: 'contain'
        width: 300,
        height: 300
    },
    productCategory: {
        borderWidth: 1,
        borderColor: 'violet',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        backgroundColor: 'violet'
    },
    labels: {
        flexDirection: 'row'
    }
});
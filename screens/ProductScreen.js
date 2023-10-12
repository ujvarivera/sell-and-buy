import { useLayoutEffect } from "react"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"

export default function ProductScreen({ navigation, route }) {
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
                <Image source={{ uri: product.url }} style={styles.productImage} />
                <View style={styles.labels}>
                    <Text style={styles.productCategory}>{product.category}</Text>
                    <Text style={styles.productCategory}>{product.price}$</Text>
                </View>
                <Text>{product.description}</Text>
            </ScrollView>
        </SafeAreaView>
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


import { useEffect, useState } from "react";
import { db, collection, query, getDocs, orderBy, onSnapshot } from '../config/firebase-config'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProductsScreen({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const q = query(collection(db, "products"), orderBy("createdAt", "desc"))
            // const data = await getDocs(q)
            // const docs = data.docs.map(doc => ({ ...doc.data() }))
            // setProducts(docs);
            const unsubscribe = onSnapshot(q, (data) => {
                const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setProducts(docs)
            })

            return () => unsubscribe()
        }

        getProducts()
    }, [])

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
                            <View style={{margin: 16}}>
                                <Image source={{ uri: item.image.uri }} width={150} height={150} />
                                <Text style={styles.title}>
                                    { item.title.length > 15 ? 
                                        item.title.substring(0, 15) + '...' :
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

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        color: 'violet',
    }
});
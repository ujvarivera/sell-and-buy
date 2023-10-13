import { db, collection, query, orderBy, onSnapshot, where } from '../config/firebase-config'
import { FlatList, Image, Pressable, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import useUser from "../hooks/useUser";
import { useEffect, useLayoutEffect, useState } from 'react';

export default function ProfileScreen({ navigation }) {
    const { user, logout } = useUser()
    const [ myProducts, setMyProducts ] = useState([]);

    useEffect(() => {
        async function getMyProducts() {
            const q = query(
                collection(db, "products"), 
                orderBy("createdAt", "desc"), 
                where('userId', '==', user.uid))

            const unsubscribe = onSnapshot(q, (data) => {
                const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setMyProducts(docs)
            })

            return () => unsubscribe()
        }

        getMyProducts()
    }, []) 

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <PrimaryButton title="Logout" onPress={logoutHandler} />
        })
    }, [navigation])

    function logoutHandler() {
        logout()
    }   
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            { /* <Title title={user?.email}/> */}
            <Title title="My Products"/> 
            <FlatList
                data={myProducts}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => navigation.navigate("Edit Product", {
                            product: item
                        })} android_ripple={{ color: "violet" }}>
                            <View style={{margin: 16}}>
                                <Image source={{ uri: item.image.uri }} width={150} height={150} />
                                <Text>
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
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { collection, db, addDoc } from "../config/firebase-config"
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'

export default function AddNewProductScreen({ navigation }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ category, setCategory ] = useState("")
  const [ condition, setCondition ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ url, setUrl ] = useState("")

  async function addProduct() {
    await addDoc(collection(db, "products"), {
      title: title,
      desription: description,
      category: category,
      price: price,
      condition: condition,
      url: url,
    });

    /*
    setTitle("")
    setDescription("")
    setCategory("")
    setCondition("")
    setPrice("")
    setUrl("")
    */
    
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      {/* <Title title="Add new Product" /> */}
      <Input placeholder='title' onChange={(value) => setTitle(value)} />
      <Input placeholder='description' onChange={(value) => setDescription(value)} />
      <Input placeholder='category' onChange={(value) => setCategory(value)} />
      <Input placeholder='condition' onChange={(value) => setCondition(value)} />
      <Input placeholder='price' onChange={(value) => setPrice(value)} />
      <Input placeholder='url' onChange={(value) => setUrl(value)} />
      <PrimaryButton title='Add' onPress={addProduct}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  text: {
    alignItems: 'center',
  }
});

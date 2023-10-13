import { ScrollView, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Input from '../components/Input'
import DropdownSelect from 'react-native-input-select'
import { db, storage } from '../config/firebase-config'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import useUser from "../hooks/useUser";
import PrimaryButton from '../components/PrimaryButton'
import {
  deleteObject,
  ref,
} from 'firebase/storage'

export default function EditProductScreen({ navigation, route }) {
  const { product } = route.params
  const { user } = useUser()

  const [ title, setTitle ] = useState(product.title)
  const [ description, setDescription ] = useState(product.description)
  const [ category, setCategory ] = useState(product.category)
  const [ condition, setCondition ] = useState(product.condition)
  const [ price, setPrice ] = useState(product.price)
  const [ image, setImage ] = useState(product.image)

  useLayoutEffect(() => {
      navigation.setOptions({
          title: "Edit " + product.title,
          // headerLeft:() => <PrimaryButton title="Back" onPress={() => {navigation.navigate('Profile')}}/>,
          headerRight: () => <PrimaryButton title="Delete" onPress={handleDelete} color="red"/>
      })
  }, [navigation])

  async function handleDelete() {
    await deleteDoc(doc(db, 'products', product.id))
    await deleteObject(ref(storage, `images/${user.uid}/${image.uid}`))
    // navigation.navigate("Profile")
    navigation.goBack()
  }

  async function handleUpdate() {
    await updateDoc(doc(db, 'products', product.id), {
      title: title,
      description: description,
      category: category,
      price: price,
      condition: condition,
      userId: product.userId,
      createdAt: product.createdAt,
      updatedAt: new Date(),
      image: product.image //{ uri: url, uid },
    })
    // navigation.navigate("Profile")
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      <Image
        source={{ uri: image.uri }}
        style={{ width: '100%', height: 300, objectFit: 'contain', borderRadius: 12 }}
      />
      <Input onChange={(value) => setTitle(value)} value={title}/>
      <Input onChange={(value) => setDescription(value)} value={description}/>
      <DropdownSelect
            options={[
              { name: 'Clothing', id: 'clothing' },
              { name: 'Electronics', id: 'electronics' },
              { name: 'Entertainment', id: 'entertainment' },
            ]}
            optionLabel={'name'}
            optionValue={'id'}
            selectedValue={category}
            onValueChange={(value) => setCategory(value)}
            primaryColor={'violet'}
            dropdownStyle={{
              borderColor: 'violet',
            }}
          />
          <DropdownSelect
            options={[
              { name: 'New', id: 'new' },
              { name: 'Used', id: 'used' },
            ]}
            optionLabel={'name'}
            optionValue={'id'}
            selectedValue={condition}
            onValueChange={(value) => setCondition(value)}
            primaryColor={'violet'}
            dropdownStyle={{
              borderColor: 'violet',
            }}
          />
          <Input onChange={(value) => setPrice(value)} value={price}/>

          <PrimaryButton title="Update" onPress={handleUpdate}/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 12,
  },
  contentContainerStyle: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

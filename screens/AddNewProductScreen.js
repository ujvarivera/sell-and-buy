import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { collection, db, addDoc, storage } from "../config/firebase-config"
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import useUser from '../hooks/useUser'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'
import uuid from 'react-native-uuid'
import DropdownSelect from 'react-native-input-select'

export default function AddNewProductScreen({ navigation }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ category, setCategory ] = useState("")
  const [ condition, setCondition ] = useState("")
  const [ price, setPrice ] = useState("")
  // const [ url, setUrl ] = useState("https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg")
  const [ image, setImage ] = useState(null)
  const { user } = useUser()

  async function addProduct() {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function (e) {
        console.log(e)
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      console.log(image.uri)
      xhr.open('GET', image.uri, true)
      xhr.send(null)
    })
    const uid = uuid.v4()

    const fileRef = ref(storage, `images/${user.uid}/${uid}`)
    const result = await uploadBytes(fileRef, blob)

    // We're done with the blob, close and release it
    blob.close()

    const url = await getDownloadURL(fileRef)

    await addDoc(collection(db, "products"), {
      title: title,
      description: description,
      category: category,
      price: price,
      condition: condition,
      // url: url,
      userId: user.uid ? user.uid : null,
      createdAt: new Date(),
      image: { uri: url, uid },
    });

    setTitle("")
    setDescription("")
    setCategory("")
    setCondition("")
    setPrice("")
    setImage(null);
    // setUrl("https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg")
    
    navigation.navigate('Home')
  }

  const handleImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0])
    }
  }

  return (
    <View style={styles.container}>
      {/* <Title title="Add new Product" /> */}
      <Input placeholder='title' onChange={(value) => setTitle(value)} value={title}/>
      <Input placeholder='description' onChange={(value) => setDescription(value)} value={description}/>
      <DropdownSelect
            placeholder="Select a category..."
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
          />
          <DropdownSelect
            placeholder="Select the condition..."
            options={[
              { name: 'New', id: 'new' },
              { name: 'Used', id: 'used' },
            ]}
            optionLabel={'name'}
            optionValue={'id'}
            selectedValue={condition}
            onValueChange={(value) => setCondition(value)}
            primaryColor={'violet'}
          />
      <Input placeholder='price' onChange={(value) => setPrice(value)} value={price}/>
      <PrimaryButton title="select image" onPress={handleImage} />
      <PrimaryButton title='Add' onPress={addProduct}/>
      {image && (
        <Image
          source={{ uri: image?.uri }}
          style={{ width: '100%', height: 300, objectFit: 'contain' }}
        />
      )}
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

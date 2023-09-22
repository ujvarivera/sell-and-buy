import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({ title }) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginVertical: 20,
        color: "violet"
    },
});
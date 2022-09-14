import React, { useState } from 'react'

import { Text, StyleSheet, View, TextInput } from 'react-native'

const NewTabItem = () => {
    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const [type, setType] = useState();

    return (
        <View>
            <Text>New Tab Item</Text>
            <Text>Name</Text>
            <TextInput onChange={(e) => console.log(e)} placeholder='John Appleseed'/>
            <Text>Amount</Text>
            <TextInput placeholder='$52.85'/>
            <Text>Type</Text>
            <TextInput placeholder='Skip The Dishes'/>
        </View>
    )
}

export default NewTabItem;
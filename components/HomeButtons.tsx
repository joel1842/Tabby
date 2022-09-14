import React from 'react'

import { View, Pressable, Text, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigate } from 'react-router-native'

const HomeButtons = () => {
    const navigate = useNavigate();
    return (
    <View style={homeButtons.homeButtonSelect}>
        <Pressable onPress={() => navigate('/additem')} style={[homeButtons.newTabButton, homeButtons.homeButton]}>
            <MaterialIcon name="playlist-add" style={homeButtons.addItemIcon} />
            <Text style={homeButtons.buttonText}>Add Item</Text>
        </Pressable>
        <Pressable style={[homeButtons.addItemButton, homeButtons.homeButton]}>
            <MaterialIcon name="receipt" style={homeButtons.newTabIcon} />
            <Text style={homeButtons.buttonText}>New Tab</Text>
        </Pressable>
    </View>
)}


const homeButtons = StyleSheet.create({
    homeButtonSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginBottom: 15
    },
    homeButton: {
        borderRadius: 15,
        padding: 15,
        width: '48%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addItemIcon: {
        fontSize: 24,
        marginRight: 5
    },
    newTabIcon: {
        fontSize: 20,
        marginRight: 7
    },
    buttonText: {
        fontSize: 17
    },
    newTabButton: {
        backgroundColor: '#FFBA49'
    },
    addItemButton: {
        backgroundColor: '#81D24B'
    }
})

export default HomeButtons;
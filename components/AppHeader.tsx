import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const AppHeader = () => (
    <View style={headerStyles.header}>    
        <Text style={headerStyles.title}>
            Tabby 🐷
        </Text>
    </View>
)

const headerStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "500", 
        marginTop: 10,
        textAlign: 'center',
        color: '#ffffff'
    },
    subtitle: {
        fontSize: 16
    },
    header: {
        zIndex: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: '#2b2d42', 
        width: '100%',
        height: '8%',
        margin: 'auto'
    }
})

export default AppHeader;
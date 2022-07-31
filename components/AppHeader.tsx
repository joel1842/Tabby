import React from 'react'
import { StyleSheet, Text } from 'react-native';

const AppHeader = () => (
    <>    
        <Text style={headerStyles.title}>
            Tabby 🐷 💸
        </Text>
        <Text style={headerStyles.subtitle}>
            keep tabs on your loans
        </Text>
    </>
)

const headerStyles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: "500", 
        marginTop: 10
    },
    subtitle: {
        fontSize: 16
    }
})

export default AppHeader;
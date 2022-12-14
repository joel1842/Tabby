import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { useNavigate, useLocation } from 'react-router-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

interface FooterProps {
    tab: number;
    setTab: Dispatch<SetStateAction<number>>
}

const AppFooter = () => {
    const navigate = useNavigate()

    const selectedButton = (route: string) => {
        const location = useLocation()
        if (location.pathname === route) {
            return FooterStyles.selectedTab
        }
        return null;
    }

    return (
    <View style={FooterStyles.footer}>
        <TouchableHighlight onPress={() => navigate('/')} style={[FooterStyles.tab, selectedButton('/')]}>
           <MaterialIcon name="person-outline" size={30} color="white" />
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigate('/additem')} style={[FooterStyles.tab, selectedButton('/additem')]}>
            <MaterialIcon name="receipt-long" size={30} color="white" />
        </TouchableHighlight>

        <TouchableHighlight onPress={() => console.log()} style={[FooterStyles.tab, selectedButton('')]}>
            <MaterialCommunityIcon name="cash" size={30} color="white"/>
        </TouchableHighlight>
    </View>
)}

const FooterStyles = StyleSheet.create({
    selectedTab: {
        backgroundColor: '#404563'
    },
    tab: {
        borderRadius: 10,
        padding: 5 
    },
    footer: {
        backgroundColor: '#2b2d42',
        width: '100%',
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 100,
        paddingRight: 100
    }
})

export default AppFooter;
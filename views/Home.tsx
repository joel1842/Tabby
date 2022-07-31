import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import owedTab from '../data/owedTab.json'
import iOweTab from '../data/iOweTab.json'

const Home = () => {

    const [tab, setTab] = useState(owedTab);
    const [tabSwitchText, setTabSwitchText] = useState('Owed Tab');
 
    const switchTab = () => {
        if (tabSwitchText === 'My Tab') {
            setTab(owedTab)
            setTabSwitchText('Owed Tab')
        } else {
            setTab(iOweTab)
            setTabSwitchText('My Tab')
        }

    }
    
    const totalTabAmount = () => {
        return tab.reduce((totalAmount, tabItem) => totalAmount + tabItem.amount, 0).toFixed(2)
    }

    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>
                Tabby 🐷 💸
            </Text>
            <Text style={homeStyles.subtitle}>
                keep tabs on your loans
            </Text>
            <View style={homeStyles.box}>
                <Text style={homeStyles.boxTitle}>Current Tab</Text>
                <Text style={homeStyles.boxMainInfo}>${totalTabAmount()}</Text>
            </View>
            <Button title={`View ${tabSwitchText}`} onPress={switchTab} color="#AEFFB6" />
            <View style={homeStyles.groups}>
                <Text style={homeStyles.boxTitle}>People</Text>
                {tab.map(({name, amount}) => (
                    <View style={homeStyles.listStyle}>
                        <Text style={homeStyles.listName}>{name}</Text>
                        <Text style={homeStyles.listAmount}>{amount.toFixed(2)}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const homeStyles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: "500", 
        marginTop: 10
    },
    subtitle: {
        fontSize: 16
    },
    boxTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#363636"
    },
    boxMainInfo: {
        marginTop: 7,
        fontSize: 36,
        fontWeight: "700",
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
        flex: 1,
        width: '85%',
        padding: 50,
        borderRadius: 15,
        marginTop: 30,
        height: "50%",
        backgroundColor: '#AEFFB6',
    },
    groups: {
        flex: 4,
        width: '85%',
        borderRadius: 15,
        padding: 50,
        marginTop: 30,
        backgroundColor: '#d3d3d3',
    },
    listStyle: {
        marginTop: 15,
        margin: 5,
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    listName: {
        paddingRight: 10
    },
    listAmount: {
        paddingLeft: 10
    }
  });

  export default Home;
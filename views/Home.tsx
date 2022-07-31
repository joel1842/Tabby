import React, {useState} from "react";
import { StyleSheet, View, Button } from 'react-native';
import owedTab from '../data/owedTab.json'
import iOweTab from '../data/iOweTab.json'

import AppHeader from "../components/AppHeader";
import AmountOwed from "../components/AmountOwed";
import OwedList from "../components/OwedList";

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

    return (
        <View style={homeStyles.container}>
            <AppHeader />
            <AmountOwed tab={tab} />
            <Button title={`View ${tabSwitchText}`} onPress={switchTab} color="#AEFFB6" />
            <OwedList tab={tab} />
        </View>
    )
}

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default Home;
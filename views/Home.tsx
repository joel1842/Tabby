import React, {useState} from "react";
import { StyleSheet, View, ScrollView, Pressable, Text } from 'react-native';
import owedTab from '../data/owedTab.json'
import iOweTab from '../data/iOweTab.json'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import AmountOwed from "../components/AmountOwed";
import OwedList from "../components/OwedList";

const Home = () => {
    const [tab, setTab] = useState(0);
    const tabData = tab === 0 ? owedTab : iOweTab;

    return (
        <ScrollView contentContainerStyle={homeStyles.scroll}>
            <AmountOwed tab={tabData} />
            <OwedList tabData={tabData} tab={tab} setTab={setTab} />
            <View style={homeStyles.homeButtonSelect}>
                <Pressable style={[homeStyles.newTabButton, homeStyles.homeButton]}>
                    <MaterialIcon name="forms-add-on" />
                    <Text>Add Item</Text>
                </Pressable>
                <Pressable style={[homeStyles.addItemButton, homeStyles.homeButton]}>
                    <MaterialIcon name="receipt" />
                    <Text>New Tab</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    homeButtonSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%'
    },
    homeButton: {
        borderRadius: 15,
        padding: 15,
        width: '48%'
    },
    newTabButton: {
        backgroundColor: '#FFBA49'
    },
    addItemButton: {
        backgroundColor: '#81D24B'
    },
    scroll: {
        alignItems: 'center',
        height: '100%'
    }
  });

  export default Home;
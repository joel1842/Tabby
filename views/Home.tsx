import React, {useState} from "react";
import { StyleSheet, View, ScrollView, Pressable, Text } from 'react-native';

import owedTab from '../data/owedTab.json'
import iOweTab from '../data/iOweTab.json'
import AmountOwed from "../components/AmountOwed";
import OwedList from "../components/OwedList";
import HomeButtons from "../components/HomeButtons";

const Home = () => {
    const [tab, setTab] = useState(0);
    const tabData = tab === 0 ? owedTab : iOweTab;

    return (
        <ScrollView contentContainerStyle={homeStyles.scroll}>
            <AmountOwed tab={tabData} />
            <OwedList tabData={tabData} tab={tab} setTab={setTab} />
            <HomeButtons />
        </ScrollView>
    )
}

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    scroll: {
        alignItems: 'center',
        height: '100%'
    }
  });

  export default Home;
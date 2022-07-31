import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface TabProps {
    name: string,
    amount: number,
    type: string
}

interface OwedProps {
    tab: TabProps[]
}

const AmountOwed: FC<OwedProps> = ({ tab }) => {
    const totalTabAmount = () => {
        return tab.reduce((totalAmount, tabItem) => totalAmount + tabItem.amount, 0).toFixed(2)
    }

    return (
    <View style={owedStyles.box}>
        <Text style={owedStyles.boxTitle}>Current Tab</Text>
        <Text style={owedStyles.boxMainInfo}>${totalTabAmount()}</Text>
    </View>
)}

const owedStyles = StyleSheet.create({
    box: {
        flex: 1,
        width: '85%',
        padding: 50,
        borderRadius: 15,
        marginTop: 30,
        height: "50%",
        backgroundColor: '#AEFFB6',
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
    }
})

export default AmountOwed;
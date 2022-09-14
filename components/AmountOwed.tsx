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
//         /* Rectangle 3 */

// position: absolute;
// width: 294px;
// height: 93px;
// left: 13px;
// top: 43px;

// background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), #FFBA49;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 0px 0px 20px 20px;

        flex: 1,
        width: '95%',
        padding: 50,
        borderRadius: 15,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: '#FFBA49'
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
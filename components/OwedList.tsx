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

const OwedList: FC<OwedProps> = ({ tab }) => (
    <View style={owedStyles.groups}>
        <Text style={owedStyles.boxTitle}>People</Text>
        {tab.map(({name, amount}) => (
            <View key={name} style={owedStyles.listStyle}>
                <Text style={owedStyles.listName}>{name}</Text>
                <Text style={owedStyles.listAmount}>{amount.toFixed(2)}</Text>
            </View>
        ))}
    </View>
)

const owedStyles = StyleSheet.create({
    boxTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#363636"
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
})

export default OwedList;
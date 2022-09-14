import React, {Dispatch, FC, SetStateAction} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

interface TabProps {
    name: string,
    amount: number,
    type: string,
    group: string
}

interface OwedProps {
    tabData: TabProps[],
    tab: number,
    setTab: Dispatch<SetStateAction<number>>
}

const OwedList: FC<OwedProps> = ({ tab, setTab, tabData }) => (
    <View style={owedStyles.groups}>
        <View style={owedStyles.owedSelect}>
            <Pressable onPress={() => setTab(0)} style={[owedStyles.owedButton, tab === 0 && owedStyles.selectedOwed]}>
                <MaterialIcon style={owedStyles.buttonIcon} name='person' size={23} />
                <Text style={owedStyles.buttonTitle}>People</Text>
            </Pressable>
            <Pressable onPress={() => setTab(1)} style={[owedStyles.owedButton, tab === 1 && owedStyles.selectedOwed]}>
                <MaterialIcon style={owedStyles.buttonIcon} name='people' size={25} />
                <Text style={owedStyles.buttonTitle}>Groups</Text>
            </Pressable>
        </View>
        {tabData.map(({name, amount}) => (
            <View key={name} style={owedStyles.listStyle}>
                <Text style={owedStyles.listName}>{name}</Text>
                <Text style={owedStyles.listAmount}>{amount.toFixed(2)}</Text>
            </View>
        ))}
    </View>
)

const owedStyles = StyleSheet.create({
    buttonTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#363636"
    },
    owedSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        alignSelf: 'center'
    },
    selectedOwed: {
        
        backgroundColor: '#81D24B'
    },
    owedButton: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 20
    },
    buttonIcon: {
        marginRight: 5
    },
    groups: {
        flex: 4,
        width: '95%',
        borderRadius: 15,
        padding: 30,
        marginTop: 15,
        backgroundColor: '#ABE188',
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
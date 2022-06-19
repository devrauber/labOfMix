import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function List(props){
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 30,
        borderRadius: 10,
    },
    name:{
        flexDirection:'row',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        borderRadius: 10,
    },
    content:{
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '100%',
        marginTop: 10
    },
})

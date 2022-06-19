import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function New(props){
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image
            source={props.cover}
            style={styles.cover}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {props.name}
                </Text>

                <View style={styles.dot}>
                </View>

                <Text style={styles.badge}>
                    {props.classification}
                </Text>
            </View>

            <Text style={styles.description}>
                {props.description}
            </Text>


        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
    },
    cover:{
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        MarginVertical: 10,
    },
    title:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: '#4f4a4a',
    },
    dot:{
        with: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'red',
        MarginHorizontal: '4',
    },
    badge:{
        color: 'blue',
        fontSize: 10,
        fontFamily: 'Montserrat_700Bold',
    },
    description:{
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#4f4a4a',
    },
});
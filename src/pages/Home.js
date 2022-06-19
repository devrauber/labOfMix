import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import List from '../components/List';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{background: '#FFF', }}
        >
        <View style={styles.header}>
            <View style={styles.inputArea}>
            <AntDesign
            name='search1'
            size={26}
            color='black'
            />

            <TextInput
            placeholder='Busque pelo elemento químico'
            style={styles.input}
            >
                
            </TextInput>
        
            </View>
        </View>

        <View style={styles.contentNew}>
            <Text style={styles.title}>Elementos em destaque</Text>

        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
            <New
            cover={require('../assets/alvejante.png')}
            name=' Alvejante '
            classification='Medium'
            description='Um elemento totalmente perigoso que merece o cuidado no manuseio'
            onPress={() => navigation.navigate('detail')}
            />

            <New
            cover={require('../assets/alcool.png')}
            name=' Alcool '
            classification='Danger'
            description='Um elemento totalmente perigoso que merece o cuidado no manuseio'
            onPress={() => navigation.navigate('detail')}
            />

            <New
            cover={require('../assets/Acetona.png')}
            name=' Acetona '
            classification='Safe'
            description='Um elemento totalmente perigoso que merece o cuidado no manuseio'
            onPress={() => navigation.navigate('detail')}
            />

            <New
            cover={require('../assets/qboa.png')}
            name=' Água Sanitária '
            classification='Danger'
            description='Um elemento totalmente perigoso que merece o cuidado no manuseio'
            onPress={() => navigation.navigate('detail')}
            />
            
        </ScrollView>

        <View style={styles.contentNew}>
            <Text style={[styles.title, { marginTop: 20 } ]}>Lista de Elementos</Text>

        </View>

        <ScrollView vertical showsVerticalScrollIndicator={false} style={{background: '#FFF', paddingHorizontal: 15,}}>
            <List
            name=' Água Sanitária '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Alcool '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Acetona '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Alvejante '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Detergente '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Desinfetante '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Tira Manchas '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Sabão em pó '
            onPress={() => navigation.navigate('detail')}
            />
            <List
            name=' Vinagre '
            onPress={() => navigation.navigate('detail')}
            />

        </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '98%',
    },
    contentNew:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    title:{
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    },
    subtitle:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: 'red'

    }
})
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from '../components/Swiper';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View> 

            <View style={styles.headerContent}>
                <View style={{ width: '60%' }}>
                    <Text style={styles.chemical}>
                        Elementos
                    </Text>
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={styles.dangerCount}>
                        Periculosidade
                    </Text>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Stars
                        default= {4}
                        count= {5}
                        half= {true}
                        starSize= {20}
                        fullStar= { <Ionicons name='md-star' size={24} style={styles.myStar}/> }
                        emptyStar= { <Ionicons name='md-star-outline' size={24} style={styles.myStar}/> }
                        halfStar= { <Ionicons name='md-star-half' size={24} style={styles.myStar}/> }
                        />
                       </View>
                   </View>
                </View>
                
                    <Text style={styles.description}>
                    Um elemento totalmente perigoso que merece o cuidado no manuseio
                    </Text>

                    <View style={styles.others}>
                        <Text style={styles.othersText}>
                            Outros elementos:
                        </Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }} >
                        <View style={styles.bottomPage}>
                            <Image
                            source={require('../assets/alvejante.png')}
                            style={{ width: 90, height: 120}}
                            />
                        </View>

                        <View style={styles.bottomPage}>
                            <Image
                            source={require('../assets/qboa.png')}
                            style={{ width: 90, height: 120}}
                            />
                        </View>

                        <View style={styles.bottomPage}>
                            <Image
                            source={require('../assets/alcool.png')}
                            style={{ width: 90, height: 120}}
                            />
                        </View>
                    </ScrollView>
                </View>

                       
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },
    swiperContent:{
        flexDirection: 'row',
        height: 340,
        width: '100%',
    },
    headerContent:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    chemical:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a',    
    },
    dangerCount:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 12,
        color: '#4f4a4a',   
    },
    myStar:{
        color: 'red',
        backgroundColor: 'transparent',
    },
    description:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#b3aeae',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20,

    },
    bottomPage:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 140,
        borderRadius: 8,
        marginRight: 20,
    },
    others:{
        paddingHorizontal: 20,
        marginTop: 60
    },
    othersText:{
        fontFamily: 'Montserrat_500Medium',
        fontSize: 15,
        color: '#4f4a4a',
    },
})
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Alert, Text } from 'react-native';

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

function Routes(){
    const Info = () => {
        Alert.alert(
            "INFORMAÇÕES SOBRE O PROJETO\n",
        
            "O 'Laboratório de Misturas' é um projeto para o trabalho de conclusão (TCC) do curso técnico de desenvolvimento de sistemas realizado no SENAI-RS. \n\nLembrando que o projeto é apenas um protótipo, faltando ainda varias otimizações e a produção das funções backend da aplicação. \n\nProjeto desenvovlido por Tullio Rauber, 2022",
            [
              {
                text: "Entendi tudo, amei, parabéns!",
              },
            ],
          );
    }
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                name="home" 
                component={Home}
                options={{
                    title: 'Laboratorio de Misturas',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },

                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <AntDesign
                            name="questioncircle"
                            size={26}
                            color="black"
                            onPress={Info}
                            />
                        </TouchableOpacity>
                    )
                }}
                />

                <Stack.Screen 
                name="detail" 
                component={Detail}
                options={{
                    title: 'Detalhes do Elemento',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
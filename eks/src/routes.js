import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { width, height, size, fontSize } from "react-native-responsive-sizes";
import Home from './pages/home'
import Experiencia from './pages/experiencia'
import Formacao from './pages/formacao'

import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#FCEEEE',
                    height: height(8),
                    borderTopWidth: 0,

                }
            }}
            initialRouteName="Sobre">
            <Tab.Screen name="Sobre" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="person" size={size(28)} color={'#1E1E1E'} />
                        }
                        return <Ionicons name="person" size={size(28)} color={'#8B6396'} />
                    }
                }} />
            <Tab.Screen name="Formação" component={Formacao}
            options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="school" size={size(28)} color={'#1E1E1E'} />
                        }
                        return <Ionicons name="school" size={size(28)} color={'#8B6396'} />
                    }
                }}  />
            <Tab.Screen name="Experiência" component={Experiencia}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="briefcase" size={size(28)} color={'#1E1E1E'}  /> 
                        }
                        return <Ionicons name="briefcase" size={size(28)} color={'#8B6396'} />
                    }
                }} />
        </Tab.Navigator>
    )
}
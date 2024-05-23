import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/home'
import Experiencia from './pages/experiencia'
import Formacao from './pages/formacao'


const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator initialRouteName="Sobre"> 
            <Tab.Screen name="Sobre" component={Home} />
            <Tab.Screen name="Formação" component={Formacao} />
            <Tab.Screen name="Experiência" component={Experiencia} />
        </Tab.Navigator>
    )
}
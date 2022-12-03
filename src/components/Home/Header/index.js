import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TextInput, View,   } from 'react-native';
import { Styles } from './style'

export default function Header ({ setSearch}){

    return(
    <View>
        <LinearGradient colors={['red', '#1C1C1C']} style={{height:100}}/>
            <View style={Styles.ContainerTitle}>
                <Text style={Styles.Title}>MARVEL</Text>
            </View>
            <View style={Styles.ContainerSearch}> 
                <TextInput keyboardType='text' placeholderTextColor="white"  onChangeText={setSearch} placeholder='   Buscar...' style={Styles.Search}/>
            </View> 
           
    </View>
    
   
    )
}

import React, { useEffect } from "react";
import Header from "../../Home/Header";
import { View } from "react-native";
import { Styles } from "../../Home/Header/style";
import Main from "../../Home/Main";
import { useState,  } from "react";
import { getHeroesApi } from "../../../../services/getHeroes";
import Toast from 'react-native-toast-message'

export default function Home (){
const [heroesMarvel, setHeroesMarvel] = useState ([])
const [Search, setSearch] = useState ('')
const [Error, setError] = useState (false)
const [loading, setLoading] = useState(true)
const [refresh, setRefresh] = useState (false)
const filterHeroesMarvel =  heroesMarvel.filter(item =>  item?.name?.toUpperCase().includes(Search.toUpperCase()))
const [currentPage, setCurrentPage] = useState (10)



const getAllHeroesApi = async ()=>{
try{
 const response = await getHeroesApi(currentPage);
    setHeroesMarvel([heroesMarvel, ...response?.data?.data?.results]);
    setCurrentPage(currentPage + 10)
    setLoading(false)

}
    
catch(e){
    setError(true);
    Toast.show({
        type: 'error',
        text1: 'Erro! Não foi possível carregar os heróis 😔'
});

}

}
useEffect(() =>{
getAllHeroesApi()
},[])


    return(
        <View style={Styles.ContainerHome}>
            <Header  Error={Error} heroesMarvel={heroesMarvel} setSearch={setSearch}/>
            <Main filterHeroesMarvel={filterHeroesMarvel} loading={loading} refresh={refresh} getAllHeroesApi={getAllHeroesApi} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </View> 
        
    )
}
 
  
  
    

import React, { useEffect } from "react";
import Header from "../../Home/Header";
import { View } from "react-native";
import { Styles } from "../../Home/Header/style";
import Main from "../../Home/Main";
import { useState,  } from "react";
import { getHeroesApi } from "../../service/getHeroes";

export default function Home (){
const [heroesMarvel, setHeroesMarvel] = useState ([])
const [Search, setSearch] = useState ('')
const [loading, setLoading] = useState(true)
const [refresh, setRefresh] = useState (false)
const filterHeroesMarvel =  heroesMarvel.filter(item =>  item?.name?.toUpperCase().includes(Search.toUpperCase()))
const [currentPage, setCurrentPage] = useState (10)



const getAllHeroesApi = async ()=>{
const response = await getHeroesApi(currentPage);
if(response == null){
return
}

setHeroesMarvel([heroesMarvel, ...response?.data?.data?.results]);
setCurrentPage(currentPage + 10)
setLoading(false)

}

useEffect(() =>{
getAllHeroesApi()
},[])


    return(
        <View style={Styles.ContainerHome}>
            <Header heroesMarvel={heroesMarvel} setSearch={setSearch}/>
            <Main filterHeroesMarvel={filterHeroesMarvel} loading={loading} refresh={refresh} getAllHeroesApi={getAllHeroesApi} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </View>
        
    )
}
 
  
  
    

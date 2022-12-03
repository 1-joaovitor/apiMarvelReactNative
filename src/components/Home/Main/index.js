import React from "react";
import { FlatList, Image, View, Text, TouchableOpacity, ActivityIndicator, RefreshControl} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { RenderLoader } from "../../RenderLoader";
export default function Main ({ filterHeroesMarvel, loading, refresh, getAllHeroesApi, currentPage}){
    
 const navigation = useNavigation()

 const LoadMoreItem = () =>{
    getAllHeroesApi()
 }
   
    return(
        <View style={styles.ContainerList}>
            {loading == false ? 
        <FlatList 
        onEndReached={LoadMoreItem} 
        onEndReachedThreshold={0.1} 
        ListFooterComponent={currentPage <= 100 ? RenderLoader : null} 
        refreshControl={< RefreshControl refreshing={refresh} onRefresh={getAllHeroesApi} colors={['red']} tintColor={'red'}/>}  
        numColumns={3} style={styles.ContainerFlat} 
        keyExtractor={item => item.id}
        data={filterHeroesMarvel} 
        renderItem={({item}) => {return (
        <View  style={styles.ItemList}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Details',  
                {name: item.name, description:item.description, img1:`${item.thumbnail.path}.${item.thumbnail.extension}`, comics:item.comics.items, id:new Date().toString() } )}>
                    <Image style={styles.Img} source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}} />
                </TouchableOpacity>
            <View style={styles.BoxSubtitle}>
                <Text style={styles.Subtitle}>{item.name}</Text>
            </View>
        </View>  )}}/>
            : <ActivityIndicator  size={70} color="red" style={{marginTop:100}} /> }
        </View>
     
    )
}
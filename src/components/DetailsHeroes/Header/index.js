import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import {Styles} from '../../Home/Header/style'
import { styles } from "./style";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Header(){
    
const route = useRoute() 
const {name, description, img1, comics, } = route.params
    
return(
        <View style={Styles.ContainerHome}>
            
                <View style={styles.ContainerImgDetails}>
                        <Image  style={styles.imgDetail} source={{uri:`${img1}`}}/>
                    <LinearGradient 
                    colors={['transparent', '#1C1C1C' ]} 
                    start={{x:0, y:0.2}} 
                    end={{x:0, y:1}} 
                    style={styles.styleLinear}/>
                        
                </View>
                        <View style={styles.ContainerTilte}>
                            <Text style={styles.TextTilte}>{name}</Text>
                        </View>

                <View style={styles.ContainerDescription}>
                    <Text style={styles.TextDescription}>{description == '' ? 'Este personagem não contém descrição até o momento.' : description}
                    </Text>
                </View>

                <View style={styles.ContainerListHero}>
                    <View style={styles.ContainerFlat}>
                        <FlatList horizontal={true} 
                        numColumns={1} 
                        key={new Date().toString()} 
                        data={comics}  
                        renderItem={({item}) => {return (
                        <View  style={styles.ItemList}>
                            <Image style={styles.ImgHero} source={{uri:'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'}} />
                                <View style={styles.ContainerSubtitle}>
                                    <Text style={styles.SubtitleHero} >{item.name}</Text>
                                </View>
                            </View>  )}}/>
                    </View>
                </View>
        </View>
    )
}
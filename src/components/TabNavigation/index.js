import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MytabBar (){

const navigation = useNavigation()
    return (
        <View style={styles.ContainerNavigation}>
            <View style={styles.ContainerBar}>
               <Icon onPress={()=> navigation.navigate('Home')} name="home" size={42} color="white" />
            </View>
        </View>
    )
}
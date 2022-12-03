import { ActivityIndicator, View } from "react-native"
import { styles } from "./style"


export const RenderLoader = ()=>{
    return(
       
        <View style={styles.BoxStyleLoader}>
            <ActivityIndicator size='large' color='red'/>
        </View>
    )
}
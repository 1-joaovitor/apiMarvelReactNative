import md5 from 'md5'
import { Config } from '../../config'

 const HashUtils = {
    
    getTimeStamp: () =>{
        return  Number(new Date())
    },
    getHash:()=>{
       const TimeStamp = HashUtils.getTimeStamp()
       return md5(TimeStamp + (Config.KEY_PRIVATE)+ (Config.KEY_PUBLIC))
    }
}

export default HashUtils

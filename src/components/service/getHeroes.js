
import api from './api'
import HashUtils from '../../utils/hash'
import { Config } from '../../../config'
export const getHeroesApi = async (currentPage)=>{
    try{
       const response = await api.get(`/characters?ts=${HashUtils.getTimeStamp()}&apikey=${Config.KEY_PUBLIC}&hash=${HashUtils.getHash()}&limit=${currentPage}`)
       return response
    
    }
    catch(erro){
        console.log(erro)
    }
}




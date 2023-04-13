import axios from 'axios'
import { API_URL } from '../lib/Enviroments'

class ProductService{

    
    
    getAll(){
        return axios.get(API_URL+"/producto")
        .then(res=>{
            return res.data;
        })
    }

    setNew(data){
        return axios.post(API_URL+"/producto",data)
        .then(res=>{
            return res.data;
        })
    }

    getOne(id){
        return axios.get(API_URL+"/producto/"+id)
        .then(res=>{
            return res.data;
        })
    }

    updateOne(id,data){
        return axios.put(API_URL+"/producto/"+id,data)
        .then(res=>{
            return res.data;
        })
    }

    deleteOne(id){
        return axios.delete(API_URL+"/producto/"+id)
        .then(res=>{
            return res.status
        })
    }

}

export default new ProductService();
import {getAllUsers,getAllArticles,NumberUsers,getHistorique,getExistUsers,a} from '../../../redux/actions/index'
import authToken from "../../service/setToken"
import {useState} from 'react'


import axios from "axios"

//get all users from Api
export function getUsersFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/users",{withCredentials:true}).then(rep=>{
        dispatch(getAllUsers(rep.data))

        })

}
//get all articles from Api
export function getArticlesFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/articles",{withCredentials:true}).then(rep=>{

        if(rep.data==="error"){
            window.location.href='/'
        }
        else
        dispatch(getAllArticles(rep.data))
        
        }) .catch(err=>console.log(err))
}
//add article in api

export function Addarticles(reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,marque,carton,commentaire,articleImage,action){
    
    
    return ()=>
     axios.post("http://localhost:4000/lital/articles",{reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,marque,carton,commentaire,articleImage})
     .then(rep=>{
        window.location.reload()

        console.log(rep.data)
        axios.post("http://localhost:4000/lital/historique",{reference,action,name,articleImage}).then(res=>console.log(res.data))
        window.location.reload()
        }).catch(err=>console.log(err)) 
        
    }



//Edite Article
export function EditeArticle(id,reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,carton,marque,articleImage,commentaire,iduser,lastname,date,heure){
    return ()=>
     axios.put(`http://localhost:4000/lital/articles/${id}`,{reference,name,colection,type,mesures,quantity,couleur,protoypeOuProduit,marque,carton,commentaire,articleImage},{withCredentials:true}).then(rep=>{
        
        window.location.reload()
        
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function Auth(email,password){
    return (dispatch)=>
     axios.post("http://localhost:4000/lital/login",{email,password}, {withCredentials:true}).then(rep=>{
        dispatch(getExistUsers(rep.data))
        
        console.log(rep.data)
        

        }).catch(err=>console.log(err)) 

}
export function logout(token){
    return ()=>
     axios.post(`http://localhost:4000/lital/logout`,{}, {withCredentials: true
        }).then(rep=>{
            console.log(rep.data)
 if (rep.data==="ok") {
       window.location.href="/"
    }        }).catch(err=>console.log(err)) 

}

export function AddUsers(data1,data2,data3,data4,data5){
    return ()=>
     axios.post("http://localhost:3004/users",{role:data1,name:data2,lastname:data3,gmail:data4,password:data5}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function DeleteUsers(id){
    return ()=>
     axios.delete(`http://localhost:4000/lital/users/${id}`).then(rep=>{
        console.log(rep.data)
        window.location.reload()
        }).catch(err=>console.log(err)) 

}
//delete Articles

export function DeleteArticles(id,iduser,reference,image,date,heure){
    return ()=>
     axios.patch(`http://localhost:4000/lital/articles/${id}`,{quantity:0},{withCredentials:true}).then(rep=>{
        console.log(rep.data)
        window.location.reload()
        
        }).catch(err=>console.log("erreur")) 

}

export function EditUsers(id,data,data1,data2,data3,data4){
    return ()=>
     axios.put(`http://localhost:3004/users/${id}`,{name:data,role:data1,lastname:data2,gmail:data3,password:data4}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function getNumberUsers(){
    return (dispatch)=>
    axios.get("http://localhost:3004/numberAddUsers").then(rep=>{
        dispatch(NumberUsers(rep.data))
        })

}
export function IncrementNumberAddUsers(id,data1){
    return ()=> 
     axios.patch(`http://localhost:3004/numberAddUsers/${id}`,{number:data1}).then(rep=>{
         
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function getHistoriquefromApi(){
    return (dispatch)=>
    axios.get("http://localhost:4000/lital/historique").then(rep=>{
        dispatch(getHistorique(rep.data))
        })
    }
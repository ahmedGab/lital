import React,{useState,useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { Header,Button } from 'semantic-ui-react'
import EditeArticles from "./editearticles"
import {DeleteArticles,getUsersFromApi} from '../apis/json-server'
import {Container,Image,Table } from 'semantic-ui-react'
import "../users/users.css"
import "./aticles.css"


function ListArticles(props){
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  
  




  let name=users.filter(el=>el.id===props.idUser).map(el=>el.name).join("")
  console.log(users.filter(el=>el.id===props.idUser).map(el=>el.name))
    return(
<tr>

      <td className="items-user" > 
      {props.el.reference}
  </td> 
        <td className="items-user">
         
           {props.el.name}
           
  
  </td> 
    
  <td className="items-user" > 
  {props.el.colection}
  

  </td> 
   <td className="items-user"> 
   
{props.el.type}
  </td> 
        <td className="items-user">
  {props.el.mesures}
</td> 
        <td className="items-user">
  {props.el.quantity}
</td> 

<td className="items-user">
  {props.el.couleur}
</td> 

<td className="items-user">
  {props.el.marque}
</td> 
<td className="items-user">
  {props.el.protoypeOuProduit}
</td> 
<td className="items-user">
  {props.el.carton}
</td> 
<td className="im items-user">
 <img src={"http://localhost:4000/"+props.el.articleImage} alt="logo" />
</td> 
<td className="items-user">
  {props.el.commentaire}
</td> 

<td className="items-user">
<Button circular icon color="red" onClick={()=>dispatch(DeleteArticles(props.el._id,name,props.el.reference,props.el.marque,props.el.image,new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),new Date().getHours()+":"+(new Date().getMinutes()<10?'0':''+new Date().getMinutes())))} ><i type="button" 
 className="trash  alternate outline icon"></i>  </Button> 
</td> 
<td className="items-user">
  <EditeArticles name={name} article={props.el}/>
</td> 
    </tr>
  

    )
}
export default ListArticles;
import React,{useState,useRef} from 'react'

import { useDispatch} from "react-redux";

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {EditUsers} from "../apis/json-server"
import "./users.css"

const ModalExampleCloseIcon = ({user}) => {
  
  const [name,setName]= useState(user.name)
  const [lastName,setLastName]= useState(user.lastname)
  const [email,setEmail]= useState(user.gmail)
  const [password,setPassword]= useState(user.password)
  const [fields,setFields]= useState({})
  const [errors,setErrors]= useState({})
  const dispatch = useDispatch();
  fields["name"]=name
  fields["lastname"]=lastName
  fields["email"]=email
  fields["password"]=password


  function handleValidation(){


    let formIsValid = true;
let err={}
    //Name
    
    if(fields["name"] !== undefined){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
         formIsValid = false;
          err["name"] = "Désolé, seules les lettres (az) Sont autorisés.";
       }        
    }
    if(!fields["name"]  ){
      formIsValid = false;
      err["name"] = "Ce champs ne peut être pas vide ";
   }

setErrors(err)
//lastName


if(fields["lastname"] !== undefined ){
  if(!fields["lastname"].match(/^[a-zA-Z]+$/)){
     formIsValid = false;
     err["lastname"] = "Désolé, seules les lettres (az) Sont autorisés.";
  }        
}
if(!fields["lastname"]  ){
  formIsValid = false;
  err["lastname"] = "ce champs ne peut être pas vide ";
}
setErrors(err)
    //Email
    
    if(fields["email"] !== undefined ){
      if(!fields["email"].match(/^[\w|.]{6,}\@[a-z ]{3,}\.[a-z]{2,3}$/)){
        formIsValid = false;
        err["email"] ="Désolé,le nom d'utilisateur doit comporter entre 6 et 30 caractères et seules les lettres (az), les chiffres (0-9) et les points (.) Sont autorisés."
 
      }
      if(!fields["email"]  ){
        formIsValid = false;
        err["email"] = "ce champs ne peut être pas vide ";
      }

             
    }
 //password
 
if(fields["password"] !== undefined){
  if(!fields["password"].match(/^.{6,40}$/)){
    formIsValid = false;
    err["password"] ="Désolé,le mot de passe doit comporter entre 6 et 40 "

  }
  if(!fields["password"]  ){
    formIsValid = false;
    err["password"] = "ce champs ne peut être pas vide ";
  }

         
}


    return formIsValid
    
}

function contactSubmit(e){
  e.preventDefault();

  if(handleValidation()){
    dispatch(EditUsers(user.id,fields["name"],"user",lastName,email,password))
     alert("mise a jour réussi");
  }



}
 const handleChange=(field, e)=>{  
  let f=fields       
  f[field] = e.target.value; 
  setName(f["name"])     
  setLastName(f["lastname"])   
  setEmail(f["email"]) 
  setPassword(f["password"])      
    
  
}

  return(
  <div>
  <Modal trigger={  
    <button class="ui items-user blue button"  ><i class="sync  alternate icon"></i>  Modifier</button>
  } closeIcon>

    <Header icon='edit icon' content='' />
    <Modal.Content>
    <Form onSubmit={contactSubmit}>
      
      <Form.Group unstackable widths={2}>
        <div className="bloc-error">
        <Form.Input className="input-add" label='Nom'  placeholder='Nom' type="name" defaultValue={name} onChange={e =>{handleChange("name",e)}} value={fields["name"]}  />
          <p  style={{color: "#d93025"}}> {errors["name"]} </p>
          </div>
          <div className="bloc-error">
        <Form.Input className="input-add" label='Prénom' placeholder='Prénom' defaultValue={lastName} onChange={e =>{handleChange("lastname",e)}} value={fields["lastname"]} />
        <p style={{color: "#d93025"}}> {errors["lastname"]} </p>
          </div>
      </Form.Group>
     
  
      <Form.Group widths={2}>
      <div className="bloc-error">
        <Form.Input className="input-add" label='E-mail' placeholder='Email' type="email" onChange={e =>{handleChange("email",e)}} value={fields["email"]}  defaultValue={email} />
        <p  style={{color: "#d93025"}}> {errors["email"]} </p>
          </div>
          <div className="bloc-error">
        <Form.Input className="input-add" label='Mot de passe' placeholder='Mot de passe' onChange={e =>{handleChange("password",e)}} defaultValue={password} value={fields["password"]} />
        <p  style={{color: "#d93025"}}> {errors["password"]} </p>
  </div>
      </Form.Group>
      <div className="btn-modal">
      <Button color='blue' type="submit" >
          <Icon name='checkmark' /> Modifier
        </Button>
        </div>
      </Form>
  

    </Modal.Content>
    
  </Modal>
  </div>
  )
}

export default ModalExampleCloseIcon

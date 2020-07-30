
import React from 'react'
import { Dropdown ,Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import admin from "../images/admin.png"
import {logout} from "../apis/json-server"
import { useDispatch} from "react-redux";


import "./users.css"

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownExampleDropdown = ({nom}) => {
  const dispatch = useDispatch();

  return(
    
  <Dropdown  text={nom}>
    <Dropdown.Menu >
 <Link><Dropdown.Item  className="Dropdown-admin" text=' Compte' /> </Link>  
   <Link> <Dropdown.Item className="Dropdown-admin" text='Historique' /> </Link>  
     <Dropdown.Item className="Dropdown-admin"    text='Se déconnecter' onClick={dispatch(()=>logout())}    />
          </Dropdown.Menu>
  </Dropdown>
          

)
}

export default DropdownExampleDropdown
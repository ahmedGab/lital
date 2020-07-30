import React from "react"
import { Header,Button } from 'semantic-ui-react'

import {Container,Image,Table } from 'semantic-ui-react'


function Historique(props){

  
  
  




    return(
<>

    <Table.Body>
      <Table.Row>
      <Table.Cell className="items-user"> 
      {props.el.iduser}
  </Table.Cell> 
        <Table.Cell>
          <Header as='h4' image>
           {props.el.action}
            <Header.Content>
            
                          <Header.Subheader></Header.Subheader>
            </Header.Content>
          </Header>
  
  </Table.Cell> 
    
  <Table.Cell className="items-user"> 
  {props.el.date}
  

  </Table.Cell> 
   <Table.Cell className="items-user"> 
   
{props.el.heure}
  </Table.Cell> 
  
        <Table.Cell className="items-user">
        {props.el.reference}
</Table.Cell> 

<Table.Cell className="items-user">
  <img src={props.el.image}/>
</Table.Cell> 


      </Table.Row>
    </Table.Body>
  
</>
    )
}
export default Historique;
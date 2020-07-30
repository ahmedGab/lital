 
import React, { Component } from "react";
import {getUsersFromApi, getHistoriquefromApi} from "../apis/json-server"
import { Link,Redirect} from "react-router-dom";
import UserS from "../users/userstatus"
import Historique from './historiquetable'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Container,
  Menu,
  Table
} from "semantic-ui-react";

import { connect } from "react-redux";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };
componentDidMount(){
this.props.getusers()
let b=window.location.href[window.location.href.length-1]
this.setState({id:b})
this.props.gethistorique()
}
  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };
  searchdate=(e)=>{
    this.setState({d:e.target.value})
console.log(this.state.d) }
  render() {
  const  gestionnaireS=this.props.users.filter(el=>el.role==="user");
 

    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu className="a" borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              <img src="http://latelierlital.com/sites/default/files/logo_lital_0.png" alt="logo-lital" />
            </Menu.Item>
            <Menu.Menu position="right">
              
              <Menu.Item  as="a"><UserS nom={this.props.users.filter(el=>el.id===Number(this.state.id)).map(el=>el.name)} /></Menu.Item>
            </Menu.Menu>
        
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              
            </Menu>
          </Menu>
        </Grid>
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
              <Menu.Item  as={Link} to={"/users/"+this.state.id}>
              Pages Modérateurs 
              </Menu.Item>
              <Menu.Item as={Link} to={"/articles/"+this.state.id}>Page Articles</Menu.Item>
            
              <Menu.Item active as="a">Historique</Menu.Item>
              <Divider hidden />
           
            
              
            </Menu>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h2">
                  Chercher ou ajouter des gestionnaires de stock
                </Header>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column mobile={16} tablet={16} computer={16}>
                <div className="users-layout">
            <div className="search-users">
              <div className="searchU">
            <div className="ui placeholder segment box-search ">
        <div className="ui icon header search">
          <i className="search icon"></i>
          Chercher les utilisateurs
        </div>
        <div className="field">
          <div className="ui search">
            <div className="ui icon input">
            <Input icon='users' iconPosition='left' placeholder='Search users...' />

              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </div>
      </div>
             
              </div>
              </div>



                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
                <Header dividing size="huge" as="h2">
                  Historique des mouvements
                </Header>
              </Grid.Row>
<Container>
  <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Nom et Prénom</Table.HeaderCell>
        <Table.HeaderCell>Type de mouvement</Table.HeaderCell>
        <Table.HeaderCell>Date <br/>
        <form action="/action_page.php">
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" onChange={this.searchdate}/>
</form>
        </Table.HeaderCell>
        <Table.HeaderCell>Heure</Table.HeaderCell>
        <Table.HeaderCell>Reference-article</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>


      </Table.Row>
    </Table.Header>
    {this.props.tabHistorique.filter(el=>el.date.includes(this.state.d)).map(el=>
   <Historique el={el}/>
    )}
    
    </Table>
</Container>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
users:state.users,
tabHistorique:state.historique
})
const mapDispatchToProps=(dispatch)=>({
getusers:()=>dispatch(getUsersFromApi())
,gethistorique:()=>dispatch(getHistoriquefromApi())
})
export default connect (mapStateToProps,mapDispatchToProps)(App);
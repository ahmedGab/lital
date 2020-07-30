import React from 'react';
import Login from "./front-end/components/authentification/login"
import Users from "./front-end/components/users/listusers"
import Articles from "./front-end/components/articles/listarticles"
import ArticlesU from "./front-end/components/articles/listarticlesUser"

import { Route, Switch } from "react-router-dom";
import Historique from './front-end/components/historique';
import "./App.css"

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login}/>
 
     <Route path="/users/:id" component={Users}/>
      
<Route path="/articles/:name" component={Articles} />

<Route path="/articlesUsers/:id" component={ArticlesU}/>

     <Route path="/historique/:id"  component={Historique} />
   
 
     

     </Switch>
    </div>
  );
}

export default App;

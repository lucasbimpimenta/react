import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import Rotas from './Rotas';

import './App.css';
import './css/bootstrap/dist/bootstrap.min.css';
import './css/bootstrap/dist/themes/cosmo.css';
//import './css/bootstrap/dist/themes/materia.css';
import './css/bootstrap/dist/themes/novo-condensed.css';
import './css/index.css';

import Topo from './components/basicos/Topo.js';
import Breadcrumb from './components/basicos/Breadcrumb.js';

//const store = createStore();

class App extends Component {

  constructor(){

    super();
    this.state = { CO_UNIDADE: ''};

  }

  render() {
    return (
      <div className="App">
        <Topo/>
        <div className="app-body">
          <main className="main">
              <Breadcrumb/>   
              <Switch>       
                  {Rotas.map((route, idx) => {
                      /*
                      console.log(route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                          <route.component {...props} />
                        )} />)
                        : (null));
                      */
                      return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                          <route.component {...props} />
                        )} />)
                        : (null);
                    },
                  )}
                  <Redirect from="/" to="/inicio" />   
              </Switch>
          </main>
        </div>
      </div>
    );
  }
}


export default App;

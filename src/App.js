import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

// Import das telas abaixo
import Show from './telas/show/index'
import Banda from './telas/banda/index'
import Local from './telas/local/index'
import CadastrarLocal from "./telas/cadastrar-local";
import CadastrarBanda from "./telas/cadastrar-banda";
import CadastrarShow from "./telas/cadastrar-show";

function App() {
  return (
      <Router>
          <Route exact path='/' component={Show} />
          <Route exact path='/shows' component={Show} />
          <Route exact path='/bandas' component={Banda} />
          <Route exact path='/locais' component={Local} />
          <Route exact path='/cadastrar-show' component={CadastrarShow} />
          <Route exact path='/cadastrar-banda' component={CadastrarBanda} />
          <Route exact path='/cadastrar-local' component={CadastrarLocal} />
      </Router>
  )
}

export default App;

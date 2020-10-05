import React from 'react';

import './App.css' ; 
import {HashRouter,Route} from 'react-router-dom' ; 
import About from './route/About' ; 
import Home from './route/Home' ; 
import Navigation from './component/Navigation' ; 
import Detail from './route/Detail' ; 


function App() {
  return (
    <HashRouter>
      <Navigation /> 
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie-detail" component={Detail} />
          </HashRouter>
  ) 
}

export default App ; 


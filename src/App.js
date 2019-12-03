import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Bar from './components/Bar/Bar';
import Sider from './components/Sider/Sider';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';


class App extends Component {
  state = {
    siderOpen: false,
  };

  togglerClickHandler = () => {
    this.setState((prev) => {
      return {siderOpen: !prev.siderOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({
      siderOpen: false,
    });
  };

  render(){
    let backdrop;
    if(this.state.siderOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
  
    return (
      <Router>
        <div className="App">
          <Bar togglerClickHandler={this.togglerClickHandler}/>
          <Sider show={this.state.siderOpen} togglerClickHandler={this.togglerClickHandler}/>
          {backdrop};
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={Home}/>
              <Route path="/contact" component={Home}/>
            </Switch>
          </main>
        </div>
      </Router>

    );
  }
}

export default App;

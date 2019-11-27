import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar/Bar';
import Sider from './components/Sider/Sider';
import Backdrop from './components/Backdrop/Backdrop';

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
      <div className="App">
        <Bar togglerClickHandler={this.togglerClickHandler}/>
        <Sider show={this.state.siderOpen}/>
        {backdrop};
        <main>
          <p>This is the home page!</p>
        </main>
      </div>
    );
  }
}

export default App;

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

  render(){
    let sider, backdrop;
    if(this.state.siderOpen){
      sider = <Sider />;
      backdrop = <Backdrop />;
    }
  
    return (
      <div className="App">
        <Bar/>
        (sider);
        (backdrop);
        <main style={{marginTop: "45px"}}>
          <p>This is the home page!</p>
        </main>
      </div>
    );
  }
}

export default App;

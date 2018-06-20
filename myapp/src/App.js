import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Aside from './page/aside';
import Header from './page/header';
import Bottom from './component/bottom';

class App extends Component {
  constructor(){
    super()
    this.state={
      show:false
    }
    this.changeData=this.changeData.bind(this)
  }
  changeData(data){
    this.setState({
      show:data
    })
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <Header isChange={this.changeData} isShow={this.state.show}/>
        <Aside isShow={this.state.show} isChange={this.changeData}/>
        <div className="app-top"></div>
        {
          this.props.children
        }
        <Bottom/>
      </div>
    );
  }
}

export default App;

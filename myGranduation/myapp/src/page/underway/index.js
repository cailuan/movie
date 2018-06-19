import React, { Component } from 'react';
import{Icon,BackTop} from 'antd';
import "./index.css";

import LazyLoad from 'react-lazyload';
import AboutReact from "../../component/aboutreact"

class Undeway extends Component {
    constructor(){
        super()
        
    }  
    
  render() {
    return (
      <div className="undeway">
        <LazyLoad height={200} offset={100}>
        
        <AboutReact/>
         <BackTop>
            <Icon type="arrow-up" style={{ fontSize: 40, color: '#08c' }} />
        </BackTop>
        </LazyLoad>
      </div>
    );
  }
}

export default Undeway;
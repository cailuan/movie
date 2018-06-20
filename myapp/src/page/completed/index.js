import React, { Component } from 'react';
import{Icon,BackTop} from 'antd';
import "./index.css";

import LazyLoad from 'react-lazyload';
import AboutRedux from "../../component/aboutredux"

class Completed extends Component {
    constructor(){
        super()
        
    }  
    
  render() {
    return (
      <div className="completed">
        <LazyLoad height={200} offset={100}>
        
        <AboutRedux/>
         <BackTop>
            <Icon type="arrow-up" style={{ fontSize: 40, color: '#08c' }} />
        </BackTop>
        </LazyLoad>
      </div>
    );
  }
}

export default Completed;
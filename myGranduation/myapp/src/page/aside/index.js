import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransition } from 'react-transition-group';
import {Icon } from 'antd';
import "./index.css"

class Aside extends Component {
  constructor(){
    super()
    this.changeShow=this.changeShow.bind(this)
  }
  changeShow(){
    // this.setState({})
    // this.props.isShow
    this.props.isChange(false)
  }
  render() {
    const props =  this.props;
    return (
      <div className="aside">
        <CSSTransition
              in={props.isShow}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                console.log(props.isShow)
              }}
            >
        

          <ul className="aside-left" onClick={this.changeShow}>
              <li>
                <Link to="/"><Icon type="desktop" style={{ fontSize: 20, paddingRight:'10px' }} />Home</Link>
              </li>
              <li>
                <Link to="/about"><Icon type="inbox" style={{ fontSize: 20, paddingRight:'10px' }} />About</Link>
              </li>
              <li>
                <Link to="/topics"><Icon type="appstore" style={{ fontSize: 20, paddingRight:'10px' }} />Topics</Link>
              </li>
              <li>
                <Link to="/char"><Icon type="pie-chart" style={{ fontSize: 20, paddingRight:'10px' }} />Char</Link>
              </li>
          </ul>
 
         </CSSTransition>
      </div>
    );
  }
}

export default Aside;
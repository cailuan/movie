import React, { Component } from 'react';
import{Icon,Avatar} from 'antd';
import {connect} from 'react-redux';
import{Link}from 'react-router-dom';
import "./index.css"
class Header extends Component {
    constructor(){
        super()
        this.headerLeft = this.headerLeft.bind(this)
        this.state={
            left:false
        }
    }
    headerLeft(){
        
        this.setState({
            left:!this.props.isShow
        },function(){
            console.log(this.state.left)
            this.props.isChange(this.state.left)
        })
        
    }
    
  render() {
      const {value} = this.props;
    return (
      <div className="header">
         <div className="header-left" onClick={this.headerLeft}><Icon type="zhihu" style={{ fontSize: 24, color: '#08c' }} /></div>
         <div className="header-right">
            <span className="header-padrig">{value}</span>
            {
                value == '未登录'?
                <Link to="/login"><Avatar size="large" icon="user" /></Link>
                :<Avatar size="large" icon="user" />
            }
            
        </div>
         <div className="header-center">电影信息网</div>
         
      </div>
    );
  }
}
const mapStateToProps = (state,props)=>{
    return {
        value : state.username
    }
}

export default connect(mapStateToProps)(Header);
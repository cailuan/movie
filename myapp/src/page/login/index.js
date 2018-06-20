import React,{Component}from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import existence  from '../../action';
import './index.css';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props){
        super()
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.login = this.login.bind(this);
    }
    login(ev){
        ev.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        const name={} ;
        name.username = username;
        name.password = password;
        if(this.props.value =='未登录'){
            this.props.loginUser(name)(this)
        }
        
    }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         const that = this;
//         axios.post('/users/login',{username:values.username,password:values.password})
//         .then(function (response) {
//             if(response.data.code == 800){
//                 that.props.history.push('/about')
//             }else{
//                 message.info(response.data.message);
//             }
//           console.log(response);
          
//         })
//         .catch(function (error) {

//         });
//       }
//     });
//   }
  render() {
 
    return (<div className="login">
        <form className="login-form">
            <h2>登陆页面</h2>
            <input type="text" placeholder="Username" ref='username' className="login-username login-style"/><br/>
            <input type="password" placeholder="Password" ref="password" className="login-password login-style"/><br/>
            <div><Link to="/register">to register</Link></div>
            <button onClick={this.login} className="login-button login-style">login</button>
        </form>
      </div>
    );
  }
}
function mapSateToProps(state,ownprops){
    return {
        value : state.username
    }
}
function mapDispatchToProps(dispatch,ownprops){
    return {
        loginUser:(values)=>{
            
            return (that)=>{             
                axios.post('/users/login',{username:values.username,password:values.password})
                .then(function (response) {
                    if(response.data.code == 800){
                        dispatch(existence(response.data.name))
                        console.log(that)
                        that.props.history.push('/about')
                    }else{
                        message.info(response.data.message);
                    }
                console.log(response);
                
                })
                .catch(function (error) {

                });
            }
           
        }
    }
}
// function mapDispatchToProps(dispatch,ownprops){
//     return {
//         loginUser:(name)=>{
//             console.log(name)
//             dispatch(existence(name))
//         }
//     }
// }
export default connect(mapSateToProps,mapDispatchToProps)(Login);
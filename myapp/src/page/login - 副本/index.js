import React,{Component}from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './index.css';
const FormItem = Form.Item;

class Logins extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const that = this;
        axios.post('/users/login',{username:values.username,password:values.password})
        .then(function (response) {
            if(response.data.code == 800){
                that.props.history.push('/about')
            }else{
                message.info(response.data.message);
            }
          console.log(response);
          
        })
        .catch(function (error) {

        });
      }
    });
  }
  render() {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    
    return (<div className="login">
    <h2>登陆页面</h2>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="/register">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </Form>
      </div>
    );
  }
}
const Login = Form.create()(Logins);

export default Login;
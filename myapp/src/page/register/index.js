
import React,{Component}from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './index.css';
const FormItem = Form.Item;

class Registers extends React.Component {
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
        axios.post('/users/register',{username:values.username,password:values.password})
        .then(function (response) {
            console.log(response)
            if(response.data.code == 900){
                that.props.history.push('/login')
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
    
    return (<div className="register">
    
      <Form onSubmit={this.handleSubmit} className="register-form">
      <h2>注册页面</h2>
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
          <Button type="primary" htmlType="submit" className="register-form-button">
            register in
          </Button>
          Or <Link to="/login">login now!</Link>
        </FormItem>
      </Form>
      </div>
    );
  }
}
const Register = Form.create()(Registers);

export default Register;


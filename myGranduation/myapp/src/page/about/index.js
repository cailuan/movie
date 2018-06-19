import React, { Component } from 'react';
import axios from 'axios';
import { message,Pagination } from 'antd';
import "./index.css";
import weixin from '../../picture/weixin.png';
import app from '../../picture/app.png';
import maizuo from '../../picture/maizuo.jpg';
class About extends Component {
  constructor(){
    super()
    this.state={
      comments : [],
      billboards:[]
    }
    this.fmtDate = this.fmtDate.bind(this)
  }
  componentDidMount(){
    const that = this;
    axios.get('/api/comment?__t=1528552544535')
    .then(function (response) {
      that.setState({
        comments : response.data.data.comments
      })
    })
    .catch(function (error) {
      message.error('This is a message of error');
    });
    axios.get('/api/billboard/active?__t=1528725622126&type=1')
    .then(function (response) {
      that.setState({
        billboards : response.data.data.billboards
      })
    })
    .catch(function (error) {
      message.error('This is a message of error');
    });
  }
  fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}
  render() {
    return (
      <div className="about">
      <div className="about-theory">
        <div className="about-bigbox">
          <h3>热门评论</h3>
          <ul>
            {
              this.state.comments ?
              this.state.comments.map((item,index)=>{
                return <li key = {item.id} className="about-li">
                <img src={item.user.avatorUrl} className="about-img"/>
                <div className="about-box">
                  <h5>{item.user.name}</h5>
                  <span>{this.fmtDate(item.createAt)}</span>
                  <span>评论了电影</span>
                  <i>{item.film.name}</i>
                  <p>{item.text}</p>
                </div>
              </li>
              })
              :null
            }
          </ul>
        </div>
        <div className="about-rightbox">
          <h3>
          参与评论
          </h3>
          <ul className="about-rightul">
            <li>
              <img src={weixin}/>
              <div className="code-content">
                扫码关注
                <br/>
                微信参与评论
              </div>
            </li>
            <li>
              <img src={app}/>
              <div className="code-content">
                扫码关注
                <br/>
                app参与评论
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div className="about-action">
          <div className="about-action-left">
            <h3>热门活动</h3>
            <ul className="about-action-ul">
              {
                this.state.billboards?
                this.state.billboards.map((item,index)=>{
                  return <a  key={item.id} href={item.url}><li><img src={item.imageUrl}/><p>{item.name}</p></li></a>
                })
                :null
              }
            </ul>
          </div>
          <div className="action-store">
              <h3>卖座卡购买</h3>
              <div>
                <img src={maizuo}/>
                <p>卖座卡购买</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
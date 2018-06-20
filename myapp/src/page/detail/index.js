import React ,{Component} from "react";
import axios from "axios";
import {message,Modal} from "antd";
import "./index.css"

class Details extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.changStyle = this.changStyle.bind(this);
        this.handleOk= this.handleOk.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
        this.state={
            prop :props.match.params.id,
            list : [],
            visible:false
          }
    }
    componentDidMount(){
        const that = this;
        axios.get(`/api/film/${this.state.prop}?__t=1526910362920`)
        .then(function (response) {
          console.log(response);
          that.setState({
            list : response.data.data.film
          })
        })
        .catch(function (error) {
          message.error('This is a message of error');
        });
      }
      changStyle(){
          this.setState({
            visible:true
          })
      }
      handleOk(){
          this.setState({
              visible:false
          })
      }
      handleCancel(){
          this.setState({
              visible:false
          })
      }
   render(){
       const paddingRight = {marginRight:"30px"};
      return <div className="detail">
        <div className="detail-hei"></div>
        <div className="detail-content">
        {
            this.state.list?
            <div>
            <div className="left">
            {
                this.state.list.poster ?
                <img className="detail-bor" src={this.state.list.poster.thumbnail}/>
                :null
            }
            </div>
            <div className="left">
                {
                    this.state.list.item?
                    <span className="detail-cover">{this.state.list.item.name}</span>
                    :null
                }
                <span className="detail-cover">{this.state.list.nation}/{this.state.list.language}</span>
                <span  className="detail-cover">{this.state.list.runtime}</span>
            </div>
            <div className="left detail-title">
                <span>{this.state.list.name}</span>
                <span className="detail-red">{this.state.list.grade}</span>
                <span className="detail-intro">[{this.state.list.intro}]</span>
            </div>
            <div className="left detail-top">
                <ul className="detail-one">
                    <li>上映：</li><li style={paddingRight}>{this.state.list.premiereAt}</li>
                    <li>类型：</li><li style={paddingRight}>{this.state.list.category}</li>
                    <li>导演：</li><li style={paddingRight}>{this.state.list.director}</li>
                </ul>
                <ul className="detail-one">
                    <li>剧情：</li><li className="detail-synopsis">{this.state.list.synopsis}</li><li onClick = {this.changStyle} className="detail-cursor">更多</li>
                </ul>
                <ul className="detail-one">
                    <li>主演：</li>
                    <li>
                        {
                            this.state.list.actors?
                            <ul>
                                {
                                    this.state.list.actors.map(function(item,index){
                                        return <li key={item.name} className="detail-li">
                                                <img src={item.avatarAddress}/>
                                                <span>{item.role}</span>
                                                <span>饰</span>
                                                <span>{item.name}</span>
                                            </li>
                                    })
                                }
                            </ul>
                            :null
                        }
                        
                    </li>
                </ul>
            </div>
            </div>
            :null
        }
        </div>
        <Modal
         title="更多介绍"
         visible={this.state.visible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}
        >{
            this.state.list?
            <p>{this.state.list.synopsis}</p>
            :null
        }
        
        </Modal>
    </div>
   }
    
}
export default Details;
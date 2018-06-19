import React,{Component} from "react";
import { Carousel } from 'antd';
import axios from "axios";
import { message } from 'antd';
import "./index.css";

class CarouselAuto extends Component {
    constructor(){
        super()
        this.state={
            billboards : []
          }
    }
    componentDidMount(){
        const that = this;
        axios.get('/api/billboard/home?__t=1528426146882&count=5')
        .then(function (response) {
          that.setState({
            billboards:response.data.data.billboards
          })
        })
        .catch(function (error) {
          message.error('This is a message of error');
        });
      }
    render(){
        return <div className="carousel">
            <Carousel autoplay>
            {
            this.state.billboards?
            this.state.billboards.map(function(item,index){
                return <div key = {item.id}><img className="carousel-auto" src={item.imageUrl}/></div>
            })
            :null
            }
            </Carousel>

        </div>
    }
}
export default CarouselAuto;
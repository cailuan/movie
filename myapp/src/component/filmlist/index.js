import React,{Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { message,Pagination } from 'antd';
import "./index.css";

class FilmList extends Component {
    constructor(){
        super()
        this.state={
            films : [],
            total : 0,
            current:1
          }
          this.onChange = this.onChange.bind(this);
          this.getAxios = this.getAxios.bind(this);
    }
    componentDidMount(){
        this.getAxios(this.state.current)
      }
    getAxios(current){
      const that = this;
        axios.get(`/api/film?__t=1528426276058&page=${current}&count=5&sortType=1&type=1`)
        .then(function (response) {
          console.log(response);
          that.setState({
            films : response.data.data.films,
            total : response.data.data.page.total,
            current : response.data.data.page.current
          })
        })
        .catch(function (error) {
          message.error('This is a message of error');
        });
    }
    getalltime(data){
      let date = new Date(data);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return year+"-"+month+"-"+day;
    }
    onChange(current) {
      this.getAxios(current);

    }
    render(){
        const that = this;
        const filmlist = this.state.films.map(function(item,index){
          return <div key={item.id} className="filmslist">
          <Link to={{pathname:`/about/${item.id}`}}>
          <img src={item.poster.thumbnail}/>
          <div className="right films-width ">
            <div className="width">
              <h4 className="left overflow padding-left">{item.name}</h4>
              <span className=" color-red padding-left">{item.grade}</span>
              <span className=" padding-left">[{item.intro}]</span>
            </div>
            <div className="width">
              <div><span>导演：</span><span>{item.director}</span></div>
              <div className="overflow"><span>演员：</span><span>{item.actors.map(function(item,index){return <span key={item.name}>/{item.name}</span>})}</span></div>
              <div><span>类型：</span><span>{item.category}</span></div>
              <div><span>上映：</span><span>{that.getalltime(item.premiereAt)}</span></div>
            </div>
            <div className="width">
              <div>
                <span className="border-radius">{item.item.name}</span>
                <span className="border-radius">{item.nation}/{item.language}</span>
                <span className="border-radius">{item.runtime}分钟</span>
              </div>
            </div>
          </div>
          </Link>
       
         
          </div>
        })
        return <div className="films">
           <div>
                {
                    filmlist
                }
                <div className="films-pagination">
                <Pagination  onChange={this.onChange} defaultCurrent={this.state.current} total={this.state.total} />
                 </div>
           </div>
        </div>
    }
}
export default FilmList;
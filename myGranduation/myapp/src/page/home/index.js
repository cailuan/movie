import React, { Component } from 'react';
import CarouselAuto from '../../component/carousel';
import FilmList from '../../component/filmlist';
import "./index.css";


class Home extends Component {
  constructor(){
    super()
    
  }


  render() {
    return (
      <div className="home" >
        <CarouselAuto/>
        <FilmList/>

      </div>
    );
  }
}

export default Home;
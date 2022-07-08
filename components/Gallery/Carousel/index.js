import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Slider({ src, data, id }) {

  return (
    <Carousel style={{alignItems: 'center'}} indicators={false} controls={true} interval={90000000} defaultActiveIndex={id} keyboard={true} touch={true}>
      {data?.map((item , idx) => {
        return (
          <Carousel.Item key={idx}>
            <Card sx={{backgroundColor: '#111'}}>
              <img
                  className="Media"
                  src={item.src}
              />
            </Card> 
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Slider;
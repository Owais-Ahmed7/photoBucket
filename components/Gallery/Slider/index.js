import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Styles from "../../../styles/Gallery.module.css"

const Slider = ({ data, id }) => {

  return (
    <Carousel 
      style={{alignItems: 'center'}} 
      indicators={false} 
      controls={true} 
      interval={90000000} 
      defaultActiveIndex={id} 
      keyboard={true} 
      touch={true}
    >
      {data?.map((item , idx) => {
        return (
          <Carousel.Item key={idx}>
            <div className={Styles.img_wrapper} >
              <img
                  className={`${Styles.Media} ${Styles.d_block}`}
                  src={item.src}
              />
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Slider;
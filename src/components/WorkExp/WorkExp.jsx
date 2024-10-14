import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './WorkExp.css';
import {workexp} from '../../utils/data';
import ExpCard from './ExpCard';
// import Slider from "react-slick";

const WorkExp = () => {
    // const slideRef=useRef();
    // const settings={
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows:false,
    //     responsive:[
    //         {
    //             breakpoint: 769,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll:2,
    //         },
    //         },
    //     ],
    // };
  return (
    <section className='exp-container'>
      <h5>Work Experience</h5>
      <div className='exp-content'>
      {workexp.map((item)=>(
            <ExpCard key={item.title} details={item}/>
        ))
        }
        {/* <Slider ref={slideRef}{...settings}>
        {workexp.map((item)=>(
            <ExpCard key={item.title} details={item}/>
        ))
        }
        </Slider> */}
        
      </div>
    </section>
  );
}

export default WorkExp
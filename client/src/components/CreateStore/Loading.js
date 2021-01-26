import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingIcon = ({ type, color }) => (
    <div style={center}>
    <ReactLoading type={type} color={color} height={'20%'} width={'100%'} />
    </div>
);
//  possible type values (
//     blank
//     balls
//     bars
//     bubbles
//     cubes
//     cylon
//     spin
//     spinningBubbles
//     spokes)
const center = {


    "margin": 'auto',
  
  
    "width": '10%',
    // "padding": '10px'
  }
export default LoadingIcon;
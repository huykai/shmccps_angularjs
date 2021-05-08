import React from 'react';
//import { css } from '@emotion/core';
// First way to import
//import { ClipLoader } from 'react-spinners';
// Another way to import
//import ClipLoader from 'react-spinners/ClipLoader';
import Loader from 'react-loader-spinner'

//const override = css`
//    display: block;
//    margin: 0 auto;
//    border-color: red;
//`;

export default class SpinnerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      spinType: props.spinType?props.spinType:"Circles"
    }
  }
  //shouldComponentUpdate(nextProps) {
  //  const differentDisplay = this.props.display !== nextProps.display;
  //  this.state.display = nextProps.display;
  //  return differentDisplay;
  //}
  render() {
    console.log(`LoaderSpinner ${JSON.stringify(this.state)}`);
    return (
      <div className='sweet-loading'>
        <Loader
          type={this.state.spinType}
          color="#00BFFF"
          height="20"	
          width="20"
        />
      </div> 
    )
  }
}
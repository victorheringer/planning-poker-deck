import React from 'react';
import './index.css';

const Toastr = () => {
  return (
    <div className='toastr hidden'>
      <div className='box'>
        <div>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia nec mauris laoreet pretium. Mauris vehicula, dui quis ullamcorper dapibus, orci dui sollicitudin justo, vel tristique urna sapien et nisi. </p>
        </div>
        <div></div>
        <div className='action'>
          <p>Action</p>
        </div>
      </div>
    </div>
  )
}

export default Toastr;
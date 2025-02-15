// import React from 'react'
// import '../assets/fonts/nusar.css'
// function Button() {
//   return (
//     <button type='button' className='btn btn-primary' >
//         <a target='_blank' href="https://forms.gle/NBzeS8VUrA4S7KHG9">Register</a>
//     </button>
//   )
// }

// export default Button

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/fonts/nusar.css';

function Button({label="Register"}) {
  return (
   
      <button type='button' className='btn btn-primary'>
        {label}
      </button>
    
  );
}

export default Button;

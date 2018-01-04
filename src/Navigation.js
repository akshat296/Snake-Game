import {
    Link,
  } from 'react-router-dom';
import React  from 'react';

  
const Navigation = () => (
    <header>
      <nav >
        <ul style = {{display:'inline'}}  >
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/signin'>Sign In</Link></li>
        </ul>
      </nav>
    </header>
  )

  export default Navigation;
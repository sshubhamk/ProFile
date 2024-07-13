import React from 'react';

import './navbar.css';
import { NavItems } from '../../constants/constants';
import Buttons from '../../shared-components/button/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-main'>
      <div className='logo'>
        <Link to='/'>
          ProFile
        </Link>
      </div>
      <ul>
        {NavItems.map(item => (
          <li key={item.id}>
            <Link to={item.path}> {item?.title}</Link>
          </li>
        ))}
      </ul>
      <div className='log-reg'>
        <Link to='/signup'>
          <Buttons variant={'contained'} label={'Signup'} size={'medium'} />
        </Link>
        <Link to='/login'>
          <Buttons variant={'outlined'} label={'Login'} size={'medium'} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
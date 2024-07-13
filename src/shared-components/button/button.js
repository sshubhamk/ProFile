import React from 'react';
import Button from '@mui/material/Button';

import './button.css';

const Buttons = ({ variant, label, size }) => {
  return (
    <div>
      <Button variant={variant} size={size}>{label}</Button>
    </div>
  );
}

export default Buttons;
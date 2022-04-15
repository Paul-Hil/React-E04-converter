import React from 'react';
import './styles.scss';

const Header = ({baseAmount}) => (
  <header>
    <h1>Converter</h1>
    <h2>{baseAmount} euros</h2>
  </header>
);

export default Header;

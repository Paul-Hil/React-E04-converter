import React from 'react';

import './styles.scss';

const Amount = ({selectedCurrencies}) => {
  let arroundRate = selectedCurrencies.data.toFixed(2);
  return (
  <div className="amount">
    <p className="amount-value">{arroundRate}</p>
    <p className="amount-currency">{selectedCurrencies.name}</p>
  </div>
);
}

export default Amount;

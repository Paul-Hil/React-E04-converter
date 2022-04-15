// == Import npm
import React from 'react';

// on importe les types de proptypes avec PropTypes écrit avec une majuscule
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import Amount from '../Amount';

class Currencies extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main>
          <h3>Currencies</h3>
          <ul>
            {this.props.listOfCurrencies.map((currentCurrencies) => {
            return ( <li className='currencies' key={currentCurrencies.name} onClick={this.props.ConvertCurrencies}>{currentCurrencies.name}</li>);
            })
            }
          </ul>
        </main>
      </div>
      )
  };
};

Currencies.propTypes = {
  listOfCurrencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired, // Obligatoire que le props est cette forme
  ).isRequired,
};

// == Export
export default Currencies;

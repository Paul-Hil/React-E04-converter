// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';

import currentList from 'src/data/currencies';

// == Composant
class App extends React.Component {
  constructor(listOfCurrencies) {
    super(listOfCurrencies);
    let baseAmount = 5;

      let result = baseAmount * currentList[0].rate;
      this.state = {
        selectedCurrencies: {
          'name' : currentList[0].name,
          'rate' : currentList[0].rate,
          'data': result,
        },
        open: true,
        baseAmount: 5,
    }

  }

  handleClickConvertCurrencies = (evt) => {
    evt.preventDefault();
      var selectedCurrencies = evt.currentTarget.innerText;
      currentList.forEach(currentCurrencies => {
        //console.log(selectedCurrencies, currentCurrencies.name);

        if(currentCurrencies.name === selectedCurrencies) {
          let result = this.state.baseAmount * currentCurrencies.rate;
          this.setState({
            selectedCurrencies: {
              'name' : currentCurrencies.name,
              'rate' : currentCurrencies.rate,
              'data' : result
            },
          });
        }
      });
    };

  handleClick() {
    if(this.state.open === open || this.state.open === true) {
      this.setState({
        open: this.state.open = !open,
      });
    } else {
      this.setState({
        open: this.state.open = open,
      });
    }
  }

  render() {
  return (
    <div>
      <Header baseAmount={this.state.baseAmount}/>
      <button onClick={this.handleClick.bind(this)}>Toggle currencies</button>

      {this.state.open && <Currencies listOfCurrencies={currentList} ConvertCurrencies={this.handleClickConvertCurrencies}/>}

      <Amount selectedCurrencies={this.state.selectedCurrencies} />
    </div>
  );
  }
};

// == Export
export default App;

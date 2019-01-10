import React from 'react';

import InputCurr from './InputCurr';
import AddCurr from './AddCurr';
import ListCurr from './ListCurr';
import currency from './API/curr_api';
import './CSS/InputCurr.css';

class App extends React.Component {

    state = {
        currency : {},
        currentCurrency: ['KRW'],
        currencyValue : 1
    };

    onDeleteCurrency = (currency) => {
        const getIndex = this.state.currentCurrency.indexOf(currency);
        if(getIndex !== -1) {
            const newCurrency = [];
            for (let index = 0; index < this.state.currentCurrency.length; index++) {
                if(index!== getIndex){
                    newCurrency.push(this.state.currentCurrency[index]);
                }
            }
            this.setState({
                currentCurrency : newCurrency
            })
        }
    }

    onSubmitCurrencyValue = (currencyValue) => {
        this.setState({
            currencyValue: parseInt(currencyValue, 10),
        })
    }

    onAddCurrency = (newCurrency) => {
        const getIndex = this.state.currentCurrency.indexOf(newCurrency);
        
        if (getIndex === -1) {
            const currentCurrency = this.state.currentCurrency.slice();
            currentCurrency.push(newCurrency);
            this.setState({ currentCurrency: currentCurrency });
        } else {
            alert('This Currency is already used')
            return;
        }
    }

    fetchApi = async () => {
        const response = await currency.get('/latest',{
            params: {
                base: 'USD',
            }
        });
        this.setState({currency: response.data.rates});
    }

    componentDidMount() {
        this.fetchApi();
    }

    render() {
        return(
            <div className="ui container padding-left-right">
                <div className="title-section">
                    Foreign Exchange Currency App
                </div>
                <InputCurr onSubmit={this.onSubmitCurrencyValue} />
                {
                    this.state.currentCurrency.map((currency, index) => {
                        return (
                            <ListCurr value={this.state.currencyValue}
                                currency={this.state.currency[currency] ? this.state.currency[currency] : 0}
                                code={currency}
                                onDeleteCurrency={this.onDeleteCurrency}
                                key={"list-curr-" + index}
                            />
                        );
                    })
                }
                <AddCurr onSubmit={this.onAddCurrency} />
            </div>
        );
    }
}

export default App;

import React from 'react';

class ListCurr extends React.Component {
   
    currencyName = {
        AUD : 'Australian Dollar',
        BRL : 'Brazilian Real',
        CAD : 'Canadian Dollar',
        CNY : 'Chinese Yuan',
        EUR : 'Euro',
        IDR : 'Indonesian Rupiah',
        JPY : 'Japanese Yen',
        KRW : 'South Korean Won'
    };

    currencyResult = 1;

    onDeleteCurrency = () => {
        this.props.onDeleteCurrency(this.props.code);
    };

    render() {
        if(this.props.value){
            this.currencyResult = this.props.value*this.props.currency.toFixed(2);
        }
        return(
            <div id="card-section" className="card-section shad">
                <div id="delete-button" className="delete-btn" onClick={this.onDeleteCurrency}>-</div>
                <div className="upper-wrapper">
                    <p className="curr-name">{this.props.code}</p>
                    <p id="curr-value" className="curr-value">
                    {this.props.code} {this.currencyResult.toLocaleString()}
                    </p>
                </div>
                <div className="lower-wrapper">
                    <p className="sub-name">{this.currencyName[this.props.code]}</p>
                    <p className="sub-value">1 USD = {this.props.currency.toFixed(2)} {this.props.code}</p>
                </div>
            </div>
        );
    }
}

export default ListCurr;
import React from 'react';

class AddCurr extends React.Component {
    state = {
        currvalue: ' ',
    };

    onChangeInput =  (e) => {
        this.setState({currvalue: e.target.value});
    };

    onSubmitChange =  (e) => {
        e.preventDefault();
        if(this.state.currvalue===' '){
            alert('Please add the currency');
            return;
        }
        this.props.onSubmit(this.state.currvalue);
        this.setState({currvalue: ' '});   
    };

    render() {
        return(
            <div className="add-section">
                <form onSubmit={this.onSubmitChange}>
                    <select id="dropdown" name="dropdown" className="dropdown-section custom-select" value={this.state.currvalue} onChange={this.onChangeInput}>
                        <option value=" ">Add a currency</option>    
                        <option value="AUD">AUD</option>
                        <option value="BRL">BRL</option>
                        <option value="CAD">CAD</option>
                        <option value="CNY">CNY</option>
                        <option value="EUR">EUR</option>
                        <option value="IDR">IDR</option>
                        <option value="JPY">JPY</option>
                        <option value="KRW">KRW</option>
                    </select> 
                    <button type="submit" className="btn btn-danger btn-section">+</button> 
                </form>           
            </div>
        );
    }
}

export default AddCurr;
import React from 'react';

class InputCurr extends React.Component {
    state = {
        currsubmit: 1
    };

    onChangeInput = (e) => {
        this.setState({currsubmit:  e.target.value});
    }

    onSubmitChange = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.currsubmit);
    };

    render() {
        return(
            <div className="ui input-section">
                <form onSubmit={this.onSubmitChange} className="ui form">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">USD</span>
                        </div>
                        <input type="number" className="form-control is-invalid input-box" value={this.state.currsubmit} onChange={this.onChangeInput} placeholder="Input USD Currency" required></input>
                        <button className="btn-box" type="submit">Submit</button>                                                
                        <div className="invalid-feedback sub-name">
                            United States Dollars
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputCurr;
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

const Index = () => {
    return (
        <div>
            <App />
        </div>
    );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
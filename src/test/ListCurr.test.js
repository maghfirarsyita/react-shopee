import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow , configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../Components/ListCurr';


configure({ adapter: new Adapter() });

const propsValue = { 
    currency : 1126.42,
    code : 'KRW',
    value  : 15
};

describe('<ListCurr /> specification.', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    it('Has `ListCurr` component', () => {
        const content = shallow(<Content {...propsValue} />);
        expect(content.find('#card-section').exists()).toBe(true);
    });

    it('Has delete button component', () => {
        const content = shallow(<Content {...propsValue} />);
        expect(content.find('#delete-button').exists()).toBe(true);
    });

    it('Must show the result', () => {
        const contentCard = shallow(<Content {...propsValue} />);
        const resultValue = contentCard.find('#curr-value');
        expect(resultValue.text()).toBe('KRW 16,896.3');
    });

});
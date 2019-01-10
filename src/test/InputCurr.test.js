import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow , configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../Components/InputCurr';


configure({ adapter: new Adapter() });

describe('<InputCurr /> specification.', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    it('Has `InputCurr` component', () => {
        const content = shallow(<Content />);
        expect(content.find('input').exists()).toBe(true);
    });
});
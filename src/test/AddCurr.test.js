import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow , configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../Components/AddCurr';


configure({ adapter: new Adapter() });


describe('<AddCurr /> specification.', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    it('Has `AddCurr` component', () => {
        const content = shallow(<Content />);
        expect(content.find('select').exists()).toBe(true);
    });

    it('Has all `AddCurr` selection components', () => {
        const content = shallow(<Content />);
        expect(content.find('option').length).toBe(9);
    });

    it('Has add button component', () => {
        const content = shallow(<Content />);
        expect(content.find('button').exists()).toBe(true);
    });

});
import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../Components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('<Content /> specification.', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('Successfully render', () => {
        const div = document.createElement('div');
        render(<Content />, div);
        setTimeout(() => {
            unmountComponentAtNode(div);
        }, 2000);
    });

    it('Success receive API', async () => {
        const content = shallow(<Content />);
        await content.instance().fetchApi();
        expect(content.state('currency')).not.toEqual({});
    });

});
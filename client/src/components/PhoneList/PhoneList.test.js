import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import PhoneList from './PhoneList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Link , Router} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe('PhoneList', () => {
    const wrapper = shallow(<PhoneList />);

    it('should render a div', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

});
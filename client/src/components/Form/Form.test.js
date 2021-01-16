import React from 'react';
import Form from './Form';
import Enzyme, { shallow} from 'enzyme';;
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Form />);

describe('<Form />',  () => {
    it('should render a form', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    let FormComponent;

    beforeEach(() => {
        FormComponent = shallow(
                <Form />
        );
    });

    it('should mount FormComponent sucessfully', () => {
        expect(FormComponent.length).toBe(1);
    });


    it('should change state in inputs change', () => {
        expect(wrapper.state('isButtonDisabled')).toBe(true);    
        expect(wrapper.state('name')).toBe('');
        expect(wrapper.state('manufacturer')).toBe('');
        expect(wrapper.state('color')).toBe('');
        expect(wrapper.state('price')).toBe('');
        expect(wrapper.state('screen')).toBe('');
        expect(wrapper.state('processor')).toBe('');
        expect(wrapper.state('ram')).toBe('');
        expect(wrapper.state('description')).toBe('');
        expect(wrapper.state('extraInfo')).toBe('');
      

        wrapper.find('#name').at(0).simulate('change', { target: { name:'name', value: 'nameTest' } })
        wrapper.find('#manufacturer').at(0).simulate('change', { target: { name:'manufacturer', value: 'manufacturerTest' } })
        wrapper.find('#color').at(0).simulate('change', { target: { name:'color', value: 'colorTest' } })
        wrapper.find('#price').at(0).simulate('change', { target: { name:'price', value: 'priceTest' } })
        wrapper.find('#screen').at(0).simulate('change', { target: { name:'screen', value: 'screenTest' } })
        wrapper.find('#processor').at(0).simulate('change', { target: { name:'processor', value: 'processorTest' } })
        wrapper.find('#ram').at(0).simulate('change', { target: { name:'ram', value: 'ramTest' } })
        wrapper.find('#description').at(0).simulate('change', { target: { name:'description', value: 'descriptionTest' } })
        wrapper.find('#extraInfo').at(0).simulate('change', { target: { name:'extraInfo', value: 'extraInfoTest' } })
        expect(wrapper.state('name')).toBe('nameTest');
        expect(wrapper.state('manufacturer')).toBe('manufacturerTest');
        expect(wrapper.state('color')).toBe('colorTest');
        expect(wrapper.state('price')).toBe('priceTest');
        expect(wrapper.state('screen')).toBe('screenTest');
        expect(wrapper.state('processor')).toBe('processorTest');
        expect(wrapper.state('ram')).toBe('ramTest');
        expect(wrapper.state('description')).toBe('descriptionTest');
        expect(wrapper.state('extraInfo')).toBe('extraInfoTest');
        expect(wrapper.state('isButtonDisabled')).toBe(false);       
    });
});

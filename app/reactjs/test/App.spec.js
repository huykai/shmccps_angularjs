import React from 'react'
import ReactDOM from 'react-dom';
import App from '../src/App'
import {shallow} from 'enzyme'
//import $ from 'jquery';

const setup = () => {
    const props = {
        width: 800,
        height: 800,
        //submitQuery: jest.fn()
    }
    const wrapper = shallow(<App {...props}/>)
    return {
        props,
        wrapper
    }
}

describe('App', () => {
    const { wrapper, props } = setup();
    it('App Component should be render', () => {
        expect(wrapper.find('MyComponent').exists());
    })
})
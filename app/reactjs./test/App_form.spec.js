import React from 'react'
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import App_form from '../src/App_form';
//import RegionNorth from './RegionNorth';
import { shallow, mount, render} from 'enzyme'
//import $ from 'jquery';

/*
if (!global.document) {
  try {
    const jsdom = require('jsdom').jsdom; // could throw

    const exposedProperties = ['window', 'navigator', 'document'];

    global.document = jsdom('<body></body>');
    global.window = global.document.defaultView;
    Object.keys(global.document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = global.document.defaultView[property];
      }
    });

    global.navigator = {
      userAgent: 'node.js',
    };
    //$ = $(global.document.parentWindow);
    
    //console.log('[enzyme/withDom] module "jsdom" ',global.document,global.window);
      
  } catch (e) {
    // jsdom is not supported...
    // jsdom is not supported...
    if (e.message === "Cannot find module 'jsdom'") {
      console.error('[enzyme/withDom] Error: missing required module "jsdom"');
      console.error('[enzyme/withDom] To fix this you must run:');
      console.error('[enzyme/withDom]   npm install jsdom --save-dev');
    } else {
      console.error('[enzyme withDom] ' + (e.stack || e.message));
    }
  }
}
*/
//var window = global.window
//var document = global.document
//var jsdom = require('jsdom'),
//    window = jsdom.jsdom().defaultView;

//jsdom.jQueryify(window, "../js/vendor/jquery.min.js", function(){
//    var $ = global.window.$; 
//})
//const jsdom = require('jsdom').jsdom;
//var $ = require("jquery")(jsdom('').parentWindow);
//const document = global.document;

//console.log(window);
//console.log(document);

const setup = () => {
    const props = {
        width: 800,
        height: 800,
        //submitQuery: jest.fn()
    }
    //const wrapper = shallow(<App_form {...props}/>)
    const wrapper = mount(<App_form {...props}/>)
    return {
        wrapper,
        props
    }
}

describe('App_form Component', () => {
  beforeEach(() => { 
    return { wrapper, props } = setup();
  });
  it('App_form Component should be render', () => {
    expect(wrapper.find('.App').exists());
    expect(wrapper.find('#FrameAll').exists());
    expect(wrapper.find('RegionNorth').exists());
    expect(wrapper.find('RegionWest').exists());
    expect(wrapper.find('RegionCenter').length).to.equal(1);
  });
  //{ wrapper, props } = setup();
  it('App_form Component should be have Props', () => {
    //console.log('it props: ', wrapper.find('RegionNorth').first().props('width'));
    expect(wrapper.find('RegionNorth').first().props()).to.have.property('width');
    expect(wrapper.find('RegionNorth').first().props()).to.have.property('height');
    expect(wrapper.find('RegionNorth').first().props()).to.have.property('submitQuery');

    expect(wrapper.find('RegionWest').first().props()).to.have.property('width');
    expect(wrapper.find('RegionWest').first().props()).to.have.property('height');

    expect(wrapper.find('RegionCenter').first().props()).to.have.property('width');
    expect(wrapper.find('RegionCenter').first().props()).to.have.property('height');
    expect(wrapper.find('RegionCenter').first().props()).to.have.property('data');
  })
  
})

describe('App_form Component Props', () => {
  it('App_form Component should be have handler in props', () => {
    sinon.spy(App_form.prototype, 'changeStyleSize');
    const wrapper = mount(<App_form {...props}/>);
    expect(App_form.prototype.changeStyleSize).to.have.property('callCount',1);
    App_form.prototype.changeStyleSize.restore();
  })
})

describe('App_form Component Static', () => {
  beforeEach(() => { 
    return { wrapper, props } = setup();
  });
  it('App_form Component should be have Static parameters', () => {
    expect(wrapper.find('#FrameAll').first().props()).to.have.property('className','easyui-layout');
    expect(wrapper.find('#FrameAll').first().prop('className')).to.equal('easyui-layout');
    expect(wrapper.find('#FrameAll').first().hasClass('easyui-layout')).to.equal(true);
    //App_form.prototype.changeStyleSize.restore();
  })
})

describe('App_form Component state', () => {
  beforeEach(() => { 
    return { wrapper, props } = setup();
  });
  it('App_form Component should be have state parameters', () => {
    expect(wrapper.state('minwidth')).to.equal(1200);
    expect(wrapper.state().renderDataGrid).to.equal(false);
    expect(wrapper.find('#FrameAll').first().hasClass('easyui-layout')).to.equal(true);
    //App_form.prototype.changeStyleSize.restore();
  })
})
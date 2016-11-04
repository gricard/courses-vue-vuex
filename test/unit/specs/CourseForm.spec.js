import Vue from 'vue'
import 'babel-polyfill'
import CourseForm from 'src/components/CourseForm'
import TextInput from 'src/components/common/TextInput'
import SelectInput from 'src/components/common/SelectInput'

// register global components
Vue.component('TextInput', TextInput);
Vue.component('SelectInput', SelectInput);

function setup(saving, deleting) {
  const propsData = {
    course: {},
    allAuthors: [],
    saving: saving,
    deleting: deleting,
    errors: {},
    onSave: () => {},
    onDelete: () => {},
    onChange: () => {}
  };

  const Ctor = Vue.extend(CourseForm)
  const vm = new Ctor({
//    el: document.createElement('div'),
    propsData
  })
  vm.$mount()


//  const vm = new Vue({
//    template: '<div><CourseForm :course="course" :errors="errors" :allAuthors="allAuthors" :onSave="onSave" :onChange="onChange" :onDelete="onDelete" :saving="saving" :deleting="deleting" /></div>',
//    components: {
//      'CourseForm': CourseForm
//    },
//    propsData: propsData
//  })
//  vm.$mount()


//  const vm = new Vue({
//    el: document.createElement('div'),
//    propsData: propsData,
//    render: (h) => h(CourseForm)
//  });


  return vm;
}

describe('CourseForm.vue', () => {
//  it('renders form and h1', () => {
//    const wrapper = setup(false);
//    expect(wrapper.find('form').length).toBe(1);
//    expect(wrapper.find('h1').text()).toEqual('Manage Course');
//  });

  it('renders form and h1', () => {
    const vm = setup(false, false);
//    console.log('el', vm.$el);
//    console.log('form', vm.$el.querySelectorAll('form'));
//    console.log('h1', vm.$el.querySelector('h1'));
    expect(vm.$el.querySelectorAll('form').length).to.equal(1)
    expect(vm.$el.querySelector('h1').textContent).to.equal('Manage Course')
  })

//  it('should render correct contents', () => {
//    const vm = new Vue({
//      el: document.createElement('div'),
//      render: (h) => h(Hello)
//    })
//    expect(vm.$el.querySelector('.hello h1').textContent)
//        .to.equal('Welcome to Your Vue.js App')
//  })
})



//
//import expect from 'expect';
//import React from 'react';
//import {mount, shallow} from 'enzyme';
//import TestUtils from 'react-addons-test-utils';
//import CourseForm from './CourseForm';
//
//function setup(saving, deleting) {
//  const props = {
//    course: {},
//    saving: saving,
//    deleting: deleting,
//    errors: {},
//    onSave: () => {},
//    onDelete: () => {},
//    onChange: () => {}
//  };
//
//  return shallow(<CourseForm {...props} />);
//}
//
//describe('CourseForm via Enzyme', () => {
//  it('renders form and h1', () => {
//    const wrapper = setup(false);
//    expect(wrapper.find('form').length).toBe(1);
//    expect(wrapper.find('h1').text()).toEqual('Manage Course');
//  });
//
//  it('save button is labeled "Save" when not saving', () => {
//    const wrapper = setup(false, false);
//    expect(wrapper.find('input.saver').props().value).toBe('Save');
//  });
//
//  it('save button is labeled "Saving..." when saving', () => {
//    const wrapper = setup(true, false);
//    expect(wrapper.find('input.saver').props().value).toBe('Saving...');
//  });
//
//  it('delete button is labeled "Delete" when not deleting', () => {
//    const wrapper = setup(false, false);
//    expect(wrapper.find('input.deleter').props().value).toBe('Delete');
//  });
//
//  it('delete button is labeled "Deleting..." when deleting', () => {
//    const wrapper = setup(false, true);
//    expect(wrapper.find('input.deleter').props().value).toBe('Deleting...');
//  });
//});

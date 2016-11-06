import Vue from 'vue'
import 'babel-polyfill'
import CourseForm from 'src/components/CourseForm'
import TextInput from 'src/components/common/TextInput'
import SelectInput from 'src/components/common/SelectInput'

// register global components
Vue.component('TextInput', TextInput);
Vue.component('SelectInput', SelectInput);

// component mocking function
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

  const Ctor = Vue.extend(CourseForm);
  const vm = new Ctor({
    propsData
  });
  vm.$mount();

  return vm;
}

// actual tests
describe('CourseForm.vue', () => {
  it('renders form and h1', () => {
    const vm = setup(false, false);
    expect(vm.$el.querySelectorAll('form').length).to.equal(1);
    expect(vm.$el.querySelector('h1').textContent).to.equal('Manage Course');
  });


  it('save button is labeled "Save" when not saving', () => {
    const vm = setup(false, false);
    expect(vm.$el.querySelector('input.saver').value).to.equal('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const vm = setup(true, false);
    expect(vm.$el.querySelector('input.saver').value).to.equal('Saving...');
  });

  it('delete button is labeled "Delete" when not deleting', () => {
    const vm = setup(false, false);
    expect(vm.$el.querySelector('input.deleter').value).to.equal('Delete');
  });

  it('delete button is labeled "Deleting..." when deleting', () => {
    const vm = setup(false, true);
    expect(vm.$el.querySelector('input.deleter').value).to.equal('Deleting...');
  });
});


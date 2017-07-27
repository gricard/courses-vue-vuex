import Vue from 'vue'
// import 'babel-polyfill'
import AuthorForm from '@/components/AuthorForm'
import TextInput from '@/components/common/TextInput'
import SelectInput from '@/components/common/SelectInput'
import { mount } from 'avoriaz';

// register global components
Vue.component('TextInput', TextInput);
Vue.component('SelectInput', SelectInput);

// component mocking function
function setup(saving, deleting) {
  const propsData = {
    author: {},
    saving: saving,
    deleting: deleting,
    errors: {},
    onSave: () => {},
    onDelete: () => {},
    onChange: () => {}
  };

  const vm = mount(AuthorForm, {
    propsData
  });

  return vm;
}

// actual tests
describe('AuthorForm.vue', () => {
  it('renders form and h1', () => {
    const vm = setup(false, false);
    expect(vm.find('form').length).to.equal(1);
    expect(vm.find('h1')[0].text()).to.equal('Manage Author');
  });

  it('save button is labeled "Save" when not saving', () => {
    const vm = setup(false, false);
    expect(vm.find('input.saver')[0].hasAttribute('value', 'Save')).to.equal(true);
  });

  it('save button is labeled "Saving..." when saving', () => {
    const vm = setup(true, false);
    expect(vm.find('input.saver')[0].hasAttribute('value', 'Saving...')).to.equal(true);
  });

  it('delete button is labeled "Delete" when not deleting', () => {
    const vm = setup(false, false);
    expect(vm.find('input.deleter')[0].hasAttribute('value', 'Delete')).to.equal(true);
  });

  it('delete button is labeled "Deleting..." when deleting', () => {
    const vm = setup(false, true);
    expect(vm.find('input.deleter')[0].hasAttribute('value', 'Deleting...')).to.equal(true);
  });
});


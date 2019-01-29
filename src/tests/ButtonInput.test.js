import React from 'react';
import ReactDOM from 'react-dom';
import ButtonInput from './../components/ButtonInput';

describe('ButtonInput', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = <ButtonInput
      placeholder={'Insert data'}
      value={'Data'}
      onClick={event => {}}
      onChange={event => {}}
      children={[]}
      type={'text'}
      name={'data'}
    />;
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}); 

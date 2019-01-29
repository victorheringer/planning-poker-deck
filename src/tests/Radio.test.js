import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './../components/Radio';

describe('Radio', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = <Radio
      id={1} 
      active={true} 
      onClick={event => {}}
    />;
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}); 

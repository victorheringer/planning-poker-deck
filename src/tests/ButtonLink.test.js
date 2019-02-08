import React from 'react';
import ReactDOM from 'react-dom';
import ButtonLink from './../components/ButtonLink';

describe('ButtonLink', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = <ButtonLink
      children={[]}
      onClick={event => { }}
      type='theme'
    />;
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}); 

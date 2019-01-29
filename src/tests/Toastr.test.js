import React from 'react';
import ReactDOM from 'react-dom';
import Toastr from './../components/Toastr';

describe('Toastr', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const component = <Toastr
      show={false}
      handleClose={event => { }}
      actionText={'Close'}
      messageText={'My message'}
    />;
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}); 

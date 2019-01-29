import React from 'react';
import ReactDOM from 'react-dom';
import BackFace from './../components/Card/BackFace';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

library.add(faMugHot);

describe('ButtonLink', () => {

  it('renders BackFace without crashing for normal card', () => {
    const div = document.createElement('div');
    const componentToTest = <BackFace 
      icon={false} 
      value={'5'} 
      pattern={"tech-pattern"} 
    />;
    ReactDOM.render(componentToTest, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders BackFace without crashing for icon card', () => {
    const div = document.createElement('div');
    const componentToTest = <BackFace
      icon={true}
      value={'mug-hot'}
      pattern={"tech-pattern"}
    />;

    ReactDOM.render(componentToTest, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
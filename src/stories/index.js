import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router'

import ButtonLink from './../components/ButtonLink';
import Card from './../components/Card';
import Navbar from './../components/Navbar';
import { ThemeContext } from './../Contexts';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft,
  faInfoCircle,
  faEllipsisV,
  faListUl,
  faTrash,
  faSyncAlt,
  faShareAlt,
  faAngleRight,
  faCog,
  faInfinity,
  faFolderOpen,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEdit);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faInfoCircle);
library.add(faEllipsisV);
library.add(faListUl);
library.add(faTrash);
library.add(faSyncAlt);
library.add(faShareAlt);
library.add(faAngleRight);
library.add(faCog);
library.add(faInfinity);
library.add(faFolderOpen);
library.add(faTimes);
library.add(faGithub);

storiesOf('Welcome', module).add(
  'to Storybook', () => <h1>Hello, docs here soon!</h1>
);

  storiesOf('ButtonLink', module)
    .add('with danger tech theme', 
      () => 
        <ThemeContext.Provider value={'tech-theme'}>
          <ButtonLink
            onClick={action('clicked!')}
            type='danger'
          >
            Danger Button Link
          </ButtonLink>
        </ThemeContext.Provider>
    )
    .add('with default tech theme',
      () => 
        <ThemeContext.Provider value={'tech-theme'}>
          <ButtonLink
            onClick={action('clicked!')}
            type='default'
          >
            Default Button Link
          </ButtonLink>
        </ThemeContext.Provider>
    )
    .add('with danger dark theme',
      () =>
        <ThemeContext.Provider value={'dark-theme'}>
          <ButtonLink
            onClick={action('clicked!')}
            type='danger'
          >
            Danger Button Link
          </ButtonLink>
        </ThemeContext.Provider>
    )
    .add('with default dark theme',
      () =>
        <ThemeContext.Provider value={'dark-theme'}>
          <ButtonLink
            onClick={action('clicked!')}
            type='default'
          >
            Default Button Link
          </ButtonLink>
        </ThemeContext.Provider>
    )
    .add('with danger eletric theme',
      () =>
        <ThemeContext.Provider value={'eletric-theme'}>
          <ButtonLink
            onClick={action('clicked!')}
            type='danger'
          >
            Danger Button Link
          </ButtonLink>
        </ThemeContext.Provider>
    )
    .add('with default eletric theme',
      () =>
        <ThemeContext.Provider value={'eletric-theme'}>
          <ButtonLink
            onClick={action('clicked!')}
            type='default'
          >
            Default Button Link
          </ButtonLink>
        </ThemeContext.Provider>
    )

  storiesOf('Card', module)
    .add('tech theme card',
      () => 
        <ThemeContext.Provider value={'tech-theme'}>
            <Card
              value='1'
              up
              className={'big'}
              onClick={action('Clicked!')}
              size='lg'
            />
        </ThemeContext.Provider>
    )
    .add('dark theme card',
      () => 
        <ThemeContext.Provider value={'dark-theme'}>
          <Card
            value='1'
            up
            className={'big'}
            onClick={action('Clicked!')}
            size='lg'
          />
        </ThemeContext.Provider>
    )
    .add('eletric theme card',
      () => 
        <ThemeContext.Provider value={'eletric-theme'}>
          <Card
            value='1'
            up
            className={'big'}
            onClick={action('Clicked!')}
            size='lg'
          />
        </ThemeContext.Provider>
    )
    .add('small card', 
      () => <Card 
        value='1'
        up
        onClick={action('Clicked!')}
        size='sm'
      />
    )
    .add('medium card',
      () => <Card
        value='1'
        up
        onClick={action('Clicked!')}
        size='md'
      />
    )
    .add('large card',
      () => <Card
        value='1'
        up
        className={'big'}
        onClick={action('Clicked!')}
        size='lg'
      />
    )
    .add('static card',
      () => <Card
        value='1'
        up
        fixed
        onClick={action('Clicked!')}
        size='lg'
      />
    )
    .add('removable card',
      () => <Card
        value='1'
        up
        editing
        fixed
        onClick={action('Clicked!')}
        onClickRemove={action('Remove clicked!')}
        size='lg'
      />
    )


  storiesOf('Navbar', module)
    .add('tech theme navbar', () =>
    <ThemeContext.Provider value={'tech-theme'}>
      <MemoryRouter initialEntries={['/']}>
          <Navbar route='/' />
        </MemoryRouter>
    </ThemeContext.Provider>
    )
    .add('dark theme navbar', () =>
      <ThemeContext.Provider value={'dark-theme'}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar route='/' />
        </MemoryRouter>
      </ThemeContext.Provider>
    )
    .add('eletric theme navbar', () =>
      <ThemeContext.Provider value={'eletric-theme'}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar route='/' />
        </MemoryRouter>
      </ThemeContext.Provider>
    )
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MemoryRouter } from 'react-router'

import { Button, Welcome } from '@storybook/react/demo';

import ButtonLink from './../components/ButtonLink';
import ButtonInput from './../components/ButtonInput';
import ConfirmBox from './../components/ConfirmBox';
import Toastr from './../components/Toastr';
import Card from './../components/Card';
import Navbar from './../components/Navbar';
import { NavTab, NavTabItem } from './../components/NavTab';

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
    .add('with danger theme', 
      () => <ButtonLink 
        onClick={action('clicked!')}
        theme='danger'
      >
        Danger Button Link
      </ButtonLink>
    )
    .add('with default theme',
      () => <ButtonLink
        onClick={action('clicked!')}
        theme='default'
      >
        Default Button Link
      </ButtonLink>
    )
  
  storiesOf('ButtonInput', module)
    .add('default usage', 
      () => <ButtonInput 
        placeholder='Action'
        value=''
        onClick={action('clicked!')}
        onChange={action('clicked!')}
        type='string'
        name='storyBtn'
      >
        😀 Click Me!
      </ButtonInput>
    )
  
  storiesOf('ConfirmBox', module)
    .add('visible box bottom', 
      () => <ConfirmBox 
        show
        onConfirm={action('Confirmed clicked!')}
        onCancel={action('Cancel clicked!')}
        title='One fine Confirm Box'
        message='One fine message'
        textCancel='Cancel'
        textConfirm='Confirm'
      />
    )
    .add('message and title as component',
      () => <ConfirmBox
        show
        onConfirm={action('Confirmed clicked!')}
        onCancel={action('Cancel clicked!')}
        title={<span> 🎧 Music player </span>}
        message={<span> <b>Pause</b> your music?</span>}
        textCancel='Cancel'
        textConfirm='Pause'
      />
    )
  
  storiesOf('Toastr', module)
    .add('message as component', 
      () => <Toastr 
        show
        handleClose={action('Cancel clicked!')}
        actionText='Close' 
        messageText={<span> 📞 <b>Lost call</b></span>}
      />
    )
  
  storiesOf('Card', module)
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
        size='md'
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
        size='md'
      />
    )
    .add('back card',
      () => <Card
        value='1'
        up={false}
        onClick={action('Clicked!')}
        size='md'
      />
    )

  storiesOf('Navbar', module)
    .add('default navbar',
      () => <MemoryRouter initialEntries={['/']}>
        <Navbar route='/' />
      </MemoryRouter>
    )
  
  storiesOf('NavTab', module)
    .add('default navtab unstyled',
      () => <NavTab>
        <NavTabItem active>
          <p>Tab 1</p>
        </NavTabItem>
        <NavTabItem>
          <p>Tab 2</p>
        </NavTabItem>
        <NavTabItem>
          <p>Tab 3</p>
        </NavTabItem>
      </NavTab>
    )
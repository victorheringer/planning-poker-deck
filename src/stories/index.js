import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ButtonLink from './../components/ButtonLink';
import ButtonInput from './../components/ButtonInput';
import ConfirmBox from './../components/ConfirmBox';
import Toastr from './../components/Toastr';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

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

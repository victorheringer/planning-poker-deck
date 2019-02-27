import React from 'react';
import Card from './../../components/Card';
import ButtonLink from './../../components/ButtonLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Played = ({card, text}) => {
  return (
    <React.Fragment>
      <Card
        value={card.value}
        up={false}
        id={card.id}
        color={card.color}
        icon={card.icon}
        fixed={false}
        editing={false}
        size='lg'
      />
      <Link to="/">
        <ButtonLink type="default">
          <FontAwesomeIcon icon="long-arrow-alt-left" />
          &nbsp; {text.btn.back}
        </ButtonLink>
      </Link>
    </React.Fragment>
  );
}

export default Played;
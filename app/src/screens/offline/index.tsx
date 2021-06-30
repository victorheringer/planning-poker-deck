import { useState } from "react";

import { useStorage } from "hooks";
import { findFavorite } from "helpers";
import { Screens, Sizes } from "enums";

import * as Components from "components";
import * as Styled from "./styled";

export default function Offline() {
  const { storage, i18n } = useStorage(Screens.HOME);
  const [card, setCard] = useState<Card>();
  const text = i18n as I18n.HomeScreen;

  function handleSetCard() {
    setCard(undefined);
  }

  return (
    <Styled.Container>
      {card ? (
        <Styled.CardContainer>
          <Components.Card
            size={Sizes.LG}
            card={card}
            fixed={false}
            isFlipped={true}
          />
          <Styled.BackButton onClick={handleSetCard}>
            {text.backBtn}
          </Styled.BackButton>
        </Styled.CardContainer>
      ) : (
        <Components.CardList
          deck={findFavorite(storage.decks)}
          grid={storage.preferences.line}
          handleSelect={setCard}
          cardSize={Sizes.MD}
        />
      )}
    </Styled.Container>
  );
}

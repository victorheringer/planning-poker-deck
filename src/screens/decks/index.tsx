import { useStorage } from "hooks";
import { List, ListItem, ListTitle, Radio } from "components";
import { Screens } from "enums";

export default function Decks() {
  const { storage, actions, i18n } = useStorage(Screens.DECKS);
  const text: I18n.DecksScreen = i18n as I18n.DecksScreen;

  function handleUpdateFavorite(deck: Deck) {
    return function () {
      actions.updateFavorite(deck);
    };
  }

  return (
    <>
      <ListTitle>{text.decksListTitle}</ListTitle>
      <List>
        {storage.decks.map((deck) => (
          <div onClick={handleUpdateFavorite(deck)} key={deck.id}>
            <Radio active={deck.favorite} />
            <ListItem key={deck.id}>{deck.description}</ListItem>
          </div>
        ))}
      </List>
    </>
  );
}

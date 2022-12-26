import styled from "styled-components";
import { Select, OutlineButton, InputText } from "components";

const FormGroup = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ColInput = styled.div`
  flex-grow: 1;
`;

const ColOptions = styled.div`
  display: flex;
`;

type CreateRoomFormProps = {
  roomName: string;
  setRoomName: (name: string) => void;
  decks: Deck[];
  deckId: string;
  setDeckId: (deckId: string) => void;
  submit: () => void;
  text: I18n.LobbyScreen;
};

function CreateRoomForm({
  roomName,
  setRoomName,
  decks,
  deckId,
  setDeckId,
  submit,
  text,
}: CreateRoomFormProps) {
  const deckOptions = decks.map((deck) => ({
    value: deck.id,
    label: deck.name,
  }));

  return (
    <FormGroup>
      <ColInput>
        <InputText
          placeholder={text.createRoomPlaceholder}
          value={roomName}
          onChange={(event) => setRoomName(event.target.value)}
        />
      </ColInput>
      <ColOptions>
        <Select options={deckOptions} value={deckId} onChange={setDeckId} />
        <OutlineButton
          responsiveGrow
          flat={true}
          block={false}
          onClick={submit}
        >
          {text.createRoomBtn}
        </OutlineButton>
      </ColOptions>
    </FormGroup>
  );
}

export default CreateRoomForm;

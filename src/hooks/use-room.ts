import { useHistory } from "react-router-dom";
import { useShare, useStorage } from "hooks";
import { encode } from "helpers";
import { Screens, IdScopes } from "enums";
import { generateId } from "helpers";

export default function useRoom() {
  const history = useHistory();
  const { isCopied, share } = useShare();
  const { storage, actions } = useStorage(Screens.SETTINGS);

  function shareRoom(room: Room, deckId: string) {
    const data = encode(
      `room=${room.id}&join=false&deckId=${deckId}&roomName=${room.name}`
    );

    const url = `${process.env.REACT_APP_SHARE_LINK}/online?q=${data}`;

    share(url);
  }

  function joinRoom(room: Room, deckId: string) {
    const data = encode(
      `room=${room.id}&join=true&owner=${room.owner}&deckId=${deckId}&roomName=${room.name}`
    );
    history.push(`/online?q=${data}`);
  }

  function createRoom(deckId: string, name: string) {
    if (!name) return;

    actions.addRoom({
      id: generateId(IdScopes.ROOM),
      owner: true,
      deckId: deckId,
      name: name,
    });
  }

  return {
    rooms: storage.online.rooms,
    sharing: isCopied,
    shareRoom,
    createRoom,
    joinRoom,
    deleteRoom: actions.deleteRoom,
  };
}

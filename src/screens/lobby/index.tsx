import { useState } from "react";
import * as Component from "components";
import { useStorage, useRoom } from "hooks";
import { Screens } from "enums";

export default function Lobby() {
  const { storage, i18n } = useStorage(Screens.LOBBY);
  const [deckId, setDeckId] = useState(storage.decks[0].id);
  const [roomName, setRoomName] = useState("");
  const text = i18n as I18n.LobbyScreen;

  const { sharing, rooms, createRoom, shareRoom, joinRoom, deleteRoom } =
    useRoom();

  function handleShareRoom(room: Room, deckId: string) {
    return function () {
      shareRoom(room, deckId);
    };
  }

  function handleJoinRoom(room: Room, deckId: string) {
    return function () {
      joinRoom(room, deckId);
    };
  }

  function handleDeleteRoom(roomId: string) {
    return function () {
      deleteRoom(roomId);
    };
  }

  function handleCreateRoom() {
    createRoom(deckId, roomName);
    setRoomName("");
  }

  return (
    <>
      <Component.Toaster show={sharing} text={text.joinCopiedLink} />
      <Component.ListTitle>Lobby</Component.ListTitle>
      <Component.List>
        <Component.ListItem>
          <Component.CreateRoomForm
            roomName={roomName}
            setRoomName={setRoomName}
            decks={storage.decks}
            deckId={deckId}
            setDeckId={setDeckId}
            submit={handleCreateRoom}
            text={text}
          />
        </Component.ListItem>
        {rooms.map((room: Room) => (
          <Component.ListItem key={room.id}>
            <Component.RoomListItem
              text={text}
              room={room}
              share={handleShareRoom(room, room.deckId)}
              join={handleJoinRoom(room, room.deckId)}
              remove={handleDeleteRoom(room.id)}
            />
          </Component.ListItem>
        ))}
      </Component.List>
    </>
  );
}

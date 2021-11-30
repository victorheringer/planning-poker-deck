import { QueryStringRoomType } from "factories/types";

export default function queryStringRoomFactory({
  room,
  owner,
  deckId,
  roomName,
}: QueryStringRoomType) {
  return {
    id: String(room),
    owner: owner === "true",
    deckId: String(deckId),
    name: String(roomName),
  };
}

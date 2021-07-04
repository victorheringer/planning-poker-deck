import { useLocation } from "react-router-dom";
import qs from "query-string";

import { decode } from "helpers";

function createGameData(search: string) {
  const query = qs.parse(search);
  const data = qs.parse(decode(String(query.q)));

  return {
    id: String(data.room),
    owner: data.owner === "true",
    deckId: String(data.deckId),
    name: String(data.roomName),
  };
}

export default function useCreateOnlineGameData() {
  const { search } = useLocation();
  return createGameData(search);
}

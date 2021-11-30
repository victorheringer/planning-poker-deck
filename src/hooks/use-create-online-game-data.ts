import { useLocation } from "react-router-dom";
import qs from "query-string";
import { flow } from "lodash";

import { decode } from "helpers";
import { queryStringRoomFactory } from "factories";

export default function useCreateOnlineGameData() {
  const { search } = useLocation();

  return flow(
    qs.parse,
    ({ q }) => String(q),
    decode,
    qs.parse,
    queryStringRoomFactory
  )(search);
}

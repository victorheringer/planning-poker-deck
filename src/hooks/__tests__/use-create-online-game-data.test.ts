import { renderHook } from "@testing-library/react-hooks";
import useCreateOnlineGameData from "hooks/use-create-online-game-data";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    search: `?q=cm9vbT1yb29tLzg4ZmYzMzkwLTFlNjEtMTFlYy1hNDRkLWM1MTJlZWYzNWM5NSZqb2luPWZhbHNl
      JmRlY2tJZD1kZWNrL2JlNWMwYjYwLTUyZGYtMTFlYi05ODRkLTUxYzY0MTk0NTAwOSZyb29tTmFtZT1FeGFtcGxl`,
  }),
}));

describe("useCreateOnlineGameData", () => {
  it("will create game data from url", () => {
    const { result } = renderHook(() => useCreateOnlineGameData());

    expect(result.current).toEqual({
      id: "room/88ff3390-1e61-11ec-a44d-c512eef35c95",
      owner: false,
      deckId: "deck/be5c0b60-52df-11eb-984d-51c641945009",
      name: "Example",
    });
  });
});

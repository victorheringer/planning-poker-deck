import queryStringRoomFactory from "../room-factory";

describe("queryStringRoomFactory", () => {
  it("should create a room object with given data for owner", () => {
    expect(
      queryStringRoomFactory({
        room: "1",
        owner: "true",
        deckId: "1",
        roomName: "room-test",
      })
    ).toEqual({
      id: "1",
      owner: true,
      deckId: "1",
      name: "room-test",
    });
  });

  it("should create a room object with given data for non owner", () => {
    expect(
      queryStringRoomFactory({
        room: "1",
        owner: "false",
        deckId: "1",
        roomName: "room-test",
      })
    ).toEqual({
      id: "1",
      owner: false,
      deckId: "1",
      name: "room-test",
    });
  });
});

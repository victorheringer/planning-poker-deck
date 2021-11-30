import {
  findFavorite,
  findDeck,
  setFavorite,
  generateId,
} from "helpers/queries";

const deckListWithMultipleFavorites = [
  {
    id: "deck01",
    name: "fibonacci",
    description: "Fibonacci",
    favorite: true,
    custom: false,
    cards: [],
  },
  {
    id: "deck02",
    name: "standard",
    description: "Standard",
    favorite: true,
    custom: false,
    cards: [],
  },
];

const deckListWithExpectedValues = [
  {
    id: "deck01",
    name: "fibonacci",
    description: "Fibonacci",
    favorite: true,
    custom: false,
    cards: [],
  },
  {
    id: "deck02",
    name: "standard",
    description: "Standard",
    favorite: false,
    custom: false,
    cards: [],
  },
];

const deckListWithNoFavorite = [
  {
    id: "deck01",
    name: "fibonacci",
    description: "Fibonacci",
    favorite: false,
    custom: false,
    cards: [],
  },
  {
    id: "deck02",
    name: "standard",
    description: "Standard",
    favorite: false,
    custom: false,
    cards: [],
  },
];

const deckListWithSameIds = [
  {
    id: "deck01",
    name: "fibonacci",
    description: "Fibonacci",
    favorite: true,
    custom: false,
    cards: [],
  },
  {
    id: "deck02",
    name: "standard",
    description: "Standard",
    favorite: false,
    custom: false,
    cards: [],
  },
  {
    id: "deck02",
    name: "standard2",
    description: "Standard2",
    favorite: true,
    custom: false,
    cards: [],
  },
];

jest.mock("uuid", () => ({
  v1: () => "mock-uuid",
}));

describe("queries", () => {
  describe("findFavorite", () => {
    it("will get first favorite deck in a list", () => {
      const deck = findFavorite(deckListWithMultipleFavorites);
      expect(deck).toEqual({
        id: "deck01",
        name: "fibonacci",
        description: "Fibonacci",
        favorite: true,
        custom: false,
        cards: [],
      });
    });

    it("will return null if there are any favorite decks in a list", () => {
      const deck = findFavorite(deckListWithNoFavorite);
      expect(deck).toEqual(null);
    });
  });

  describe("findDeck", () => {
    it("will get the first deck in a list of decks with given id", () => {
      const deck = findDeck(deckListWithSameIds, "deck01");

      expect(deck).toEqual({
        id: "deck01",
        name: "fibonacci",
        description: "Fibonacci",
        favorite: true,
        custom: false,
        cards: [],
      });
    });

    it("will return null if there are no decks in the list with given id", () => {
      const deck = findDeck(deckListWithSameIds, "deck999");
      expect(deck).toEqual(null);
    });
  });

  describe("setFavorite", () => {
    it("will set a deck as favorite with given id in a list with favorite deck", () => {
      const listWithNewFavorite = setFavorite(
        "deck02",
        deckListWithExpectedValues
      );

      expect(listWithNewFavorite).toEqual([
        {
          id: "deck01",
          name: "fibonacci",
          description: "Fibonacci",
          favorite: false,
          custom: false,
          cards: [],
        },
        {
          id: "deck02",
          name: "standard",
          description: "Standard",
          favorite: true,
          custom: false,
          cards: [],
        },
      ]);
    });

    it("will set a deck as favorite with given id in a list with no favorite deck", () => {
      const listWithNewFavorite = setFavorite("deck01", deckListWithNoFavorite);

      expect(listWithNewFavorite).toEqual([
        {
          id: "deck01",
          name: "fibonacci",
          description: "Fibonacci",
          favorite: true,
          custom: false,
          cards: [],
        },
        {
          id: "deck02",
          name: "standard",
          description: "Standard",
          favorite: false,
          custom: false,
          cards: [],
        },
      ]);
    });
  });

  describe("generateId", () => {
    it("will generate an id with given scope", () => {
      const id = generateId("test");
      expect(id).toBe("test/mock-uuid");
    });
  });
});

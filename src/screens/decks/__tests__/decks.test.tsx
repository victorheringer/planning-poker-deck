import { render, act, fireEvent } from "@testing-library/react";

import DecksScreen from "../index";

const mockUpdateFavorite = jest.fn();

jest.mock("hooks", () => ({
  useStorage: () => ({
    storage: {
      decks: [
        {
          id: "deck/be5c0b60-52df-11eb-984d-51c641945009",
          name: "fibonacci",
          description: "Fibonacci",
          favorite: true,
          custom: false,
          cards: [],
        },
        {
          id: "deck/be5c0b60-52df-11eb-984d-51c641945010",
          name: "standard",
          description: "Standard",
          favorite: false,
          custom: false,
          cards: [],
        },
      ],
    },
    actions: {
      updateFavorite: mockUpdateFavorite,
    },
    i18n: { decksListTitle: "Decks Screen" },
  }),
}));

describe("decks render", () => {
  it("will correct render favorite deck", () => {
    const { getByLabelText } = render(<DecksScreen />);

    expect(getByLabelText("Radio for Standard")).not.toBeChecked();
  });

  it("will not render unfavorite deck", () => {
    const { getByLabelText } = render(<DecksScreen />);

    expect(getByLabelText("Radio for Fibonacci")).toBeChecked();
  });

  it("will correct render screen title", () => {
    const { getByText } = render(<DecksScreen />);

    expect(getByText("Decks Screen")).toBeDefined();
  });

  it("will render all itens in decks array", () => {
    const { getAllByRole } = render(<DecksScreen />);

    expect(getAllByRole("radio")).toHaveLength(2);
  });

  it("will correctly render text description", () => {
    const { getByText } = render(<DecksScreen />);

    expect(getByText("Fibonacci")).toBeDefined();
    expect(getByText("Standard")).toBeDefined();
  });
});

describe("decks interactions", () => {
  it("will change favorite deck", () => {
    const { getByText } = render(<DecksScreen />);

    act(() => {
      fireEvent.click(getByText("Standard"));
    });

    expect(mockUpdateFavorite).toHaveBeenCalledTimes(1);
    expect(mockUpdateFavorite).toHaveBeenCalledWith({
      id: "deck/be5c0b60-52df-11eb-984d-51c641945010",
      name: "standard",
      description: "Standard",
      favorite: false,
      custom: false,
      cards: [],
    });
  });
});

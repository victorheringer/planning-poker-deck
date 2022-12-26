import { v1 } from "uuid";
import { isEqual } from "lodash";

export function findDeck(decks: Deck[], id: string): Deck | null {
  const decksWithId = decks.filter((deck) => deck.id === id);
  return decksWithId.length > 0 ? decksWithId[0] : null;
}

export function findFavorite(decks: Deck[]): Deck | null {
  const favoriteDecks = decks.filter((deck) => deck.favorite);
  return favoriteDecks.length > 0 ? favoriteDecks[0] : null;
}

export function setFavorite(id: string, decks: Deck[]): Deck[] {
  return decks.map((deck) => ({ ...deck, favorite: deck.id === id }));
}

export function generateId(scope: string) {
  return `${scope}/${v1()}`;
}

export function alreadyJoined(rooms: Room[], id: string) {
  return rooms.reduce((acc, crr) => crr.id === id || acc, false);
}

export function isOnline(clients: GameClientState[]) {
  if (clients.length === 0) return false;
  return clients[0].online;
}

export function allPlayed(clients: GameClientState[]): boolean {
  return clients.reduce(
    (acc: boolean, client: GameClientState): boolean => !!(acc && client.card),
    true
  );
}

export function findClientById(clients: GameClientState[], id: string) {
  const client = clients.filter((client) => client.id === id);
  return client[0];
}

export function cardAlreadyPlayed(
  clients: GameClientState[],
  id: string,
  card: Card
): boolean {
  const client = findClientById(clients, id);
  return isEqual(client.card, card);
}

export function encode(data: string) {
  return btoa(data);
}

export function decode(data: string) {
  return atob(data);
}

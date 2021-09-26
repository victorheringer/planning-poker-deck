const KEY: string = process.env.REACT_APP_DATABASE;

export function put(value: LocalStorage) {
  const asString = isJson(value) ? JSON.stringify(value) : String(value);
  const current = localStorage.getItem(KEY);
  current !== asString && localStorage.setItem(KEY, asString);
}

export function get(): LocalStorage {
  const value = localStorage.getItem(KEY) || "";
  return isJson(value) ? JSON.parse(value) : value;
}

export function setup(storage: LocalStorage) {
  const value = localStorage.getItem(KEY) || "";

  if (!Boolean(value)) {
    put(storage);
  }
}

export function remove() {
  localStorage.removeItem(KEY);
}

export function isJson(value: LocalStorage | string) {
  if (typeof value === "object") return true;

  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }

  return true;
}

export function generateId() {
  return +new Date();
}

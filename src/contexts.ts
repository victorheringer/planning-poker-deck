import { createContext } from "react";
import { StorageService } from "services";

export const StorageContext = createContext({
  storage: StorageService.get(),
  setStorage: (storage: LocalStorage) => {
    console.log(storage);
  },
});

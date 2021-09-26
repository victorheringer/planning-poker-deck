/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_DATABASE: string;
    REACT_APP_HOST: string;
    REACT_SHARE_LINK: string;
  }
}

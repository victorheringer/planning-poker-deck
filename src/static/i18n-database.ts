import { Languages, Screens } from "enums";

const i18n: I18n.Modules = {
  [Languages.PT_BT]: {
    [Screens.HOME]: {
      backBtn: "Voltar",
    },
    [Screens.SETTINGS]: {
      version: "Versão do App",
      language: "Língua",
      cards: "Cartas por Linha",
      theme: "Tema",
      screen: "Tela Inicial",
      settingsListTitle: "Configurações",
      weakLock: "Manter Tela Ligada",
      enableWakeLock: "Habilitado",
      disableWakeLock: "Desabilitado",
      name: "Nome",
      namePlaceholder: "Nome",
    },
    [Screens.LOBBY]: {
      joinRoomBtn: "Entrar",
      shareRoomBtn: "Compartilhar",
      deleteRoomBtn: "Remover",
      createRoomBtn: "Criar Sala",
      joinCopiedLink: "Link da sala copiado",
      createRoomPlaceholder: "nome da sala",
    },
    [Screens.ONLINE]: {
      revealBtn: "Relevar Cartas",
      resetBtn: "Resetar Partida",
      statusWaiting: "Aguardando todos jogarem",
      statusAllPlayed: "Todos jogaram",
      room: "Sala",
    },
    [Screens.DECKS]: {
      decksListTitle: "Decks",
    },
    [Screens.SHARED]: {
      offline: "Sem conexão",
    },
  },
  [Languages.EN]: {
    [Screens.HOME]: {
      backBtn: "Back",
    },
    [Screens.SETTINGS]: {
      version: "App Version",
      language: "Language",
      cards: "Cards per line",
      theme: "Theme",
      screen: "Initial Screen",
      settingsListTitle: "Settings",
      weakLock: "Keep Screen Awake",
      enableWakeLock: "Enable",
      disableWakeLock: "Disable",
      name: "Name",
      namePlaceholder: "display name",
    },
    [Screens.LOBBY]: {
      joinRoomBtn: "Join",
      shareRoomBtn: "Share",
      deleteRoomBtn: "Delete",
      createRoomBtn: "Create Room",
      joinCopiedLink: "Link to join copied",
      createRoomPlaceholder: "room name",
    },
    [Screens.ONLINE]: {
      revealBtn: "Reveal Cards",
      resetBtn: "Reset Game",
      statusWaiting: "Waiting others to play",
      statusAllPlayed: "Everybody played",
      room: "Room",
    },
    [Screens.DECKS]: {
      decksListTitle: "Decks",
    },
    [Screens.SHARED]: {
      offline: "No connection",
    },
  },
};

export default i18n;

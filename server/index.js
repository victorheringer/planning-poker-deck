const io = require("socket.io")(4001, { cors: { origin: "*" } });

const hostRoom = (room) => `host/${room}`;
const clientRoom = (room) => `client/${room};`;

const Actions = {
  JOIN_ROOM: "JOIN_ROOM",
  REMOVE_DISCONNECTED_CLIENT: "REMOVE_DISCONNECTED_CLIENT",
  DISCONNECT_CLIENTS_FROM_HOST: "DISCONNECT_CLIENTS_FROM_HOST",
  HOST: "HOST_ACTION",
  CLIENT: "CLIENTS_ACTION",
  CLIENT_JOIN_GAME: "CLIENT_JOIN_GAME",
  CALL_HOST: "CALL_HOST_ACTION",
  CALL_CLIENT: "CALL_CLIENTS_ACTION",
  HOST_CONNECTED: "HOST_CONNECTED",
};

io.on("connection", (socket) => {
  socket.on(Actions.JOIN_ROOM, function (payload) {
    const roomHost = hostRoom(payload.room);
    const roomClient = clientRoom(payload.room);

    if (payload.owner) {
      socket.join(roomHost);

      io.to(roomClient).emit(Actions.CLIENT, {
        type: Actions.HOST_CONNECTED,
      });

      socket.on("disconnecting", (payload) => {
        io.to(roomClient).emit(Actions.CLIENT, {
          type: Actions.DISCONNECT_CLIENTS_FROM_HOST,
        });
      });
    } else {
      socket.join(roomClient);

      socket.broadcast.to(roomHost).emit(Actions.HOST, {
        type: Actions.CLIENT_JOIN_GAME,
        payload: {
          clientState: {
            id: payload.id,
            socketId: socket.id,
            card: null,
            online: true,
            playerName: payload.playerName,
          },
        },
      });

      socket.on("disconnecting", (payload) => {
        io.to(roomHost).emit(Actions.HOST, {
          type: Actions.REMOVE_DISCONNECTED_CLIENT,
          payload: { socketId: socket.id },
        });
      });
    }
  });

  socket.on(Actions.CALL_HOST, function (action) {
    io.to(hostRoom(action.payload.room)).emit(Actions.HOST, action);
  });

  socket.on(Actions.CALL_CLIENT, function (action) {
    io.to(clientRoom(action.payload.room)).emit(Actions.CLIENT, action);
  });
});

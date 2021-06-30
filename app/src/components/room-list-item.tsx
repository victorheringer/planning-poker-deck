import styled from "styled-components";
import { OutlineButton } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  margin: 0;
`;

const LeadText = styled.small`
  color: ${(props) => props.theme.lightFontColor};
  display: block;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

const IconWrapper = styled.div`
  float: right;
`;

type RoomListItemProps = {
  room: Room;
  share: () => void;
  join: () => void;
  remove: () => void;
  text: I18n.LobbyScreen;
};

export default function RoomListItem({
  room,
  share,
  join,
  remove,
  text,
}: RoomListItemProps) {
  return (
    <>
      <IconWrapper>
        {room.owner ? (
          <FontAwesomeIcon icon="crown" />
        ) : (
          <FontAwesomeIcon icon="users" />
        )}
      </IconWrapper>

      <Title>{room.name}</Title>
      <LeadText>{room.id}</LeadText>
      <ButtonWrapper>
        <OutlineButton flat={false} block={false} onClick={join}>
          {text.joinRoomBtn}
        </OutlineButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <OutlineButton flat={false} block={false} onClick={share}>
          {text.shareRoomBtn}
        </OutlineButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <OutlineButton flat={false} block={false} onClick={remove}>
          {text.deleteRoomBtn}
        </OutlineButton>
      </ButtonWrapper>
    </>
  );
}

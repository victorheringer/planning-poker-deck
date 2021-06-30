import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sizes } from "enums";

const Wrapper = styled.div<{ size: Sizes }>`
  padding: 10px;
  position: relative;
`;

const FlipContainer = styled.div<{ size: Sizes }>`
  perspective: 800px;
  cursor: pointer;
  text-align: center;

  ${(props) =>
    props.size === Sizes.SM &&
    `
    height: 110px;
    width: 100%;
  `};

  ${(props) =>
    props.size === Sizes.MD &&
    `
    height: 110px;
    width: 100%;
  `};

  ${(props) =>
    props.size === Sizes.LG &&
    `
    height: 400px;
    max-width: 315px;
    margin: 0 auto;
  `};
`;

const Flipper = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) => props.flipped && `transform: rotateY(180deg);`}
`;

const Front = styled.div<{ size: Sizes; color: string }>`
  position: absolute;
  backface-visibility: hidden;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.cardBackgroundColor};
  border-radius: 8px;
  display: block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: ${(props) => props.theme.cardFontColor};

  ${(props) =>
    props.size === Sizes.SM &&
    `
    border: 5px solid #fff;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  `};

  ${(props) =>
    props.size === Sizes.MD &&
    `
    border: 5px solid #fff;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  `};

  ${(props) =>
    props.size === Sizes.LG &&
    `
    height: calc(100% - 30px);
    width: calc(100% - 30px);
    border: 15px solid #fff;
  `};
`;

const Back = styled.div<{ size: Sizes }>`
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: ${(props) => props.theme.cardBackgroundColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;

  ${(props) =>
    props.size === Sizes.SM &&
    `
    border: 5px solid #fff;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  `};

  ${(props) =>
    props.size === Sizes.MD &&
    `
    border: 5px solid #fff;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  `};

  ${(props) =>
    props.size === Sizes.LG &&
    `
    height: calc(100% - 30px);
    width: calc(100% - 30px);
    border: 15px solid #fff;
  `};
`;

const CardNumber = styled.h3<{ size: Sizes }>`
  margin: 0px;
  font-family: Arial, sans-serif;

  ${(props) =>
    props.size === Sizes.SM &&
    `
    font-size: 30px;
    line-height: 85px;
  `};

  ${(props) =>
    props.size === Sizes.MD &&
    `
    font-size: 40px;
    line-height: 100px;
  `};

  ${(props) =>
    props.size === Sizes.LG &&
    `
    font-size: 125px;
    line-height: 375px;
  `};
`;

const CardStatus = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.cardFontColor};
`;

type CardProps = {
  card: Card;
  fixed: boolean;
  size: Sizes;
  status?: string;
  isFlipped?: boolean;
  handleClick?: (card: Card) => void;
};

export default function Card({
  card,
  size,
  fixed,
  status = "",
  isFlipped = false,
  handleClick,
}: CardProps) {
  const [flipped, setFlipped] = useState(isFlipped);

  useEffect(() => {
    setFlipped(isFlipped);
  }, [isFlipped]);

  function onClick() {
    handleClick && handleClick(card);
    !fixed && setFlipped(!flipped);
  }

  return (
    <Wrapper size={size}>
      <FlipContainer size={size} onClick={onClick}>
        <Flipper flipped={flipped}>
          <Front color={card.color} size={size}>
            <CardNumber size={size}>
              {card.isIcon && card.icon ? (
                <FontAwesomeIcon icon={card.icon} />
              ) : (
                card.value
              )}
            </CardNumber>
            {status && <CardStatus>{status}</CardStatus>}
          </Front>
          <Back size={size} />
        </Flipper>
      </FlipContainer>
    </Wrapper>
  );
}

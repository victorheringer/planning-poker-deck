import styled from "styled-components";
import { Card } from "components";
import { Sizes } from "enums";

const createGrid = (size: number) =>
  Array(size - 1)
    .fill("")
    .reduce((acc) => `${acc} auto`, "auto");

const Container = styled.div<{ grid: number; inline: boolean }>`
  display: ${(props) => (props.inline ? "flex" : "grid")};

  ${(props) =>
    !props.inline && `grid-template-columns: ${createGrid(props.grid)};`}
`;

const CardWrapper = styled.div<{ inline: boolean }>`
  ${(props) => props.inline && "width: 100px;"}
  ${(props) => props.inline && "flex: 0 0 auto;"}
`;

type CardListProps = {
  deck: Deck | null;
  grid: number;
  handleSelect: (card: Card) => void;
  inline?: boolean;
  cardSize?: Sizes;
};

export default function CardList({
  deck,
  grid,
  handleSelect,
  cardSize = Sizes.SM,
  inline = false,
}: CardListProps) {
  return (
    <Container grid={grid} inline={inline}>
      {deck?.cards.map((card) => (
        <CardWrapper inline={inline} key={card.id}>
          <Card
            handleClick={handleSelect}
            size={cardSize}
            card={card}
            fixed={true}
          />
        </CardWrapper>
      ))}
    </Container>
  );
}

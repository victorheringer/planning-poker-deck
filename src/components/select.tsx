import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 9px 14px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderInputColor};
  color: ${(props) => props.theme.mainFontColor};
`;

type OptionValue = string | number;

type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type Props<T extends OptionValue> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

export default function Select<T extends OptionValue>(props: Props<T>) {
  function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = props.options[selectedIndex];
    props.onChange(selectedOption.value);
  }

  return (
    <StyledSelect value={props.value} onChange={handleOnChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

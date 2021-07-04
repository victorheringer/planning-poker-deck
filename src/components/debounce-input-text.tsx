import { ChangeEvent } from "react";
import { InputText } from "components";
import { useDebounceInput } from "hooks";

type DebouceInputTextProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function DebounceInputText({
  value,
  onChange,
  placeholder,
}: DebouceInputTextProps) {
  const [text, setText] = useDebounceInput(value, onChange);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <InputText value={text} onChange={handleChange} placeholder={placeholder} />
  );
}

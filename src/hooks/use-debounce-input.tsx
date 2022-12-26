import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

type UseDebounceInputReturn = [string, (value: string) => void];

export default function useDebounceInput(
  value: string,
  setter: (value: string) => void
): UseDebounceInputReturn {
  const [field, setField] = useState<string>(value);
  const executeDebounce = useCallback(debounce(setter, 400), []);

  useEffect(() => {
    executeDebounce(field);
  }, [field]);

  return [field, setField];
}

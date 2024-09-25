import { useEffect, useState } from "react";

export const useSessionStorage = (key: string) => {
  const [value, setValue] = useState("{}");

  useEffect(() => {
    setValue(sessionStorage.getItem(key) ?? "");
  }, [key]);

  return value;
};

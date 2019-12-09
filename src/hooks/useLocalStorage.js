import { useState, useEffect } from "react";

export const useLocalStorage = (key = "", initialValue = null) => {
  //  const [count, setCount] = useState(0);

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  return [storedValue, setValue];
};

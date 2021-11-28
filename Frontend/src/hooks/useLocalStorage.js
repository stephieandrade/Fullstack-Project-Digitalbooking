import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  let initial;
  try {
    initial = JSON.parse(saved);
  } catch (e) {
    if (e instanceof SyntaxError) {
      localStorage.removeItem(key);
    } else {
      console.log(e, false);
    }
  }

  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

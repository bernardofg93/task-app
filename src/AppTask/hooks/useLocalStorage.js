import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    let allDbArray = [];
    allDbArray.push(value);
    // storing input name
    localStorage.setItem(key, JSON.stringify(allDbArray));
  }, [key, value]);
 
  return [value, setValue];
};
import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultConatcts) {
  const [state, setState] = useState(() => {
    localStorage.setItem(key, JSON.stringify(defaultConatcts));
    return JSON.parse(localStorage.getItem(key)) ?? defaultConatcts;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
}

export default useLocalStorage;

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useCallback, useRef } from 'react';

const useDebounce = (callback, delay): (() => void) => {
  const timer = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};

export default useDebounce;

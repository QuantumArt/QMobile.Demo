import React, { useCallback, useRef } from 'react';

const useDebounce = <T,>(
  callback: (...args: Array<T>) => void,
  delay: number,
): (() => void) => {
  const timer = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};

export default useDebounce;

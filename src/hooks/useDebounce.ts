import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value. The debounced value only updates
 * after a specified delay has passed without the value changing.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds before updating the debounced value.
 * @returns The debounced value.
 */


const useDebounce = <T>(value: T, delay: number): T => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if the value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run the effect if value or delay changes

  return debouncedValue;
};

export default useDebounce;

import { useState, useEffect } from 'react';

/**
 * A custom hook that checks if a media query matches.
 *
 * @param query - The media query string to test.
 * @returns `true` if the media query matches, otherwise `false`.
 */

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', documentChangeHandler);

    // Cleanup on unmount
    return () => mediaQueryList.removeEventListener('change', documentChangeHandler);
  }, [query]);

  return matches;
};

export default useMediaQuery;

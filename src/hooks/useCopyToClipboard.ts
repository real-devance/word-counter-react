import { useState, useCallback } from 'react';

/**
 * A custom hook for copying text to the clipboard.
 * Provides a function to copy text and a boolean indicating success.
 *
 * @returns A tuple with a function to copy text and a boolean for success.
 */



const useCopyToClipboard = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  }, []);

  return [copyToClipboard, success] as const;
};

export default useCopyToClipboard;

import styles from './MainApp.module.scss';

// Import Sections
import TextStats from '../../section/TextStats';
import TextArea from "../../section/TextArea";
import SocialStats from '../../section/SocialStats';
import FrequencyStats from '../../section/FrequencyStats';

// Import Icon
import { MenuIcon, CloseIcon } from '../../ui/Icons/AppIcons';

// Import utility functions
import countWordFrequency from '../../../utility/countWordFrequency';
import { countCharacters, countCharactersWithSpaces, countWords, countSentences, countParagraphs, countSpecialCharacters } from '../../../utility/textMetrics';

// Import Custom Hooks
import useMediaQuery from '../../../hooks/useMediaQuery';
import useDebounce from '../../../hooks/useDebounce';
import useCopyToClipboard from '../../../hooks/useCopyToClipboard';

import { useState, useCallback, useRef, useEffect, memo } from 'react';



type TextStatistics = {
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  charactersWithSpaceCount: number;
  paragraphCount: number;
  specialCharCount: number;
};

function MainApp() {
  // State to store the user's input text
  const [inputText, setInputText] = useState<string>('');

  // State to store calculated text statistics like character count, word count, etc.
  const [textStatMetrics, setTextStatMetrics] = useState<TextStatistics>({
    characterCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    charactersWithSpaceCount: 0,
    paragraphCount: 0,
    specialCharCount: 0,
  });

  // State to store word frequency data as a Map
  const [wordFreqMap, setWordFreqMap] = useState<Map<string, number>>(new Map());

  // Debounce the input text to limit how often statistics are recalculated
  const debouncedInputText = useDebounce<string>(inputText, 300);

  // Hook to manage clipboard copying functionality and success status
  const [copyToClipboard, copySuccess] = useCopyToClipboard();

  // Reference to the text area element for focusing and selecting text
  const textRef = useRef<HTMLTextAreaElement>(null);

  // State to manage the visibility of additional statistics section on smaller screens
  const [isAdditionalStatsOpen, setIsAdditionalStatsOpen] = useState(false);

  // Check if the screen width is larger than a certain threshold 
  const isLargerScreen = useMediaQuery("(min-width:80em)");

  // Function to update text statistics based on the current input text
  const updateTextStats = useCallback((text: string) => {
    setTextStatMetrics({
      characterCount: countCharacters(text),
      wordCount: countWords(text),
      sentenceCount: countSentences(text),
      charactersWithSpaceCount: countCharactersWithSpaces(text),
      paragraphCount: countParagraphs(text),
      specialCharCount: countSpecialCharacters(text),
    });
  }, []);

  // Function to update word frequency map based on the current input text
  const updateWordFrequency = useCallback((text: string) => {
    const wordsArray: string[] = text.match(/\b\S+\b/g) || [];
    setWordFreqMap(countWordFrequency(wordsArray));
  }, []);

  // Function to handle copying text to clipboard
  const handleCopy = async () => {
    if (textRef.current) {
      await copyToClipboard(inputText);
      if (copySuccess && textRef.current) {
        textRef.current.select(); // Select the text in the textarea after copying
      }
    }
  };

  // Function to clear the input text and reset all statistics
  const handleDelete = () => {
    setInputText(''); // Clear the input text
    updateTextStats(''); // Reset text statistics
    updateWordFrequency(''); // Reset word frequency
  };

  // Function to handle changes in the input textarea
  const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value); // Update the input text state
  };

  // Update text statistics and word frequency whenever the debounced input text changes
  useEffect(() => {
    updateTextStats(debouncedInputText);
    updateWordFrequency(debouncedInputText);
  }, [debouncedInputText, updateTextStats, updateWordFrequency]);

  return (
    <main className={styles.app_section}>
      {!isLargerScreen && (
        <div>
          <button
            className={styles.action_btn}
            aria-label="additional-stat-toggle"
            onClick={() => setIsAdditionalStatsOpen(!isAdditionalStatsOpen)}
          >
            {isAdditionalStatsOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      )}

      <section className={styles.app_container_layout}>
        {/* Display text statistics */}
        <TextStats textValue={textStatMetrics} />

        {/* Text input area with copy and delete functionality */}
        <TextArea
          textValue={inputText}
          onChange={handleInputText}
          handleCopy={handleCopy}
          handleDelete={handleDelete}
          textRef={textRef}
        />

        {/* Additional statistics section (social stats and word frequency) */}
        {isLargerScreen ? (
          <section className={styles.additional_stats_section}>
            <SocialStats curCharsLen={textStatMetrics.characterCount} />
            <FrequencyStats wordFrequencyMap={wordFreqMap} />
          </section>
        ) : (
          isAdditionalStatsOpen && (
            <div className={styles.backdrop}>
              <section className={`${styles.additional_stats_section} ${styles._sm}`}>
                <SocialStats curCharsLen={textStatMetrics.characterCount} />
                <FrequencyStats wordFrequencyMap={wordFreqMap} />
              </section>
            </div>
          )
        )}
      </section>
    </main>
  );
}

export default memo(MainApp);

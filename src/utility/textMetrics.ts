// Define regex patterns
const wordRegex = /\b\S+\b/g; // Matches words, including periods
const sentenceRegex = /(?:[^.!?]|\b\w{1,2}\b)+[.!?](?=\s|$)/g; // Matches sentences
const specialCharRegex = /[^\w\s]/g; // Matches special characters (excluding alphanumeric and spaces)
const paragraphRegex = /\n{2,}/; // Matches paragraphs (two or more newlines)



// Count the number of characters, excluding spaces
/**
 * Counts characters in the text, excluding spaces.
 * @param text - The text to analyze.
 * @returns The number of characters excluding spaces.
 */

const countCharacters = (text: string): number => text.replace(/\s/g, '').length;


// Count the number of characters, including spaces
/**
 * Counts characters in the text, including spaces.
 * @param text - The text to analyze.
 * @returns The number of characters including spaces.
 */
const countCharactersWithSpaces = (text: string): number => text.length;



// Count the number of words
/**
 * Counts the number of words in the text.
 * @param text - The text to analyze.
 * @returns The number of words.
 */

const countWords = (text: string): number => (text.match(wordRegex) || []).length;



// Count the number of sentences
/**
 * Counts the number of sentences in the text.
 * @param text - The text to analyze.
 * @returns The number of sentences.
 */

const countSentences = (text: string): number => (text.match(sentenceRegex) || []).length;



// Count the number of paragraphs
/**
 * Counts the number of paragraphs in the text.
 * @param text - The text to analyze.
 * @returns The number of paragraphs.
 */

const countParagraphs = (text: string): number => (text.split(paragraphRegex) || []).filter(Boolean).length;



// Count the number of special characters
/**
 * Counts the number of special characters in the text.
 * @param text - The text to analyze.
 * @returns The number of special characters.
 */

const countSpecialCharacters = (text: string): number => (text.match(specialCharRegex) || []).length;

// Export functions
export { countCharacters, countCharactersWithSpaces, countWords, countSentences, countParagraphs, countSpecialCharacters };

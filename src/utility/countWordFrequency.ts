/**
 * Counts the frequency of each word in an array of words.
 *
 * @param words - An array of words to count.
 * @returns A map where the keys are words and the values are their frequencies.
 *
 * @example
 * const words = ['apple', 'banana', 'apple'];
 * const frequencies = countWordFrequency(words);
 * console.log(frequencies); // Map { 'apple' => 2, 'banana' => 1 }
 */

const countWordFrequency = (words: string[]): Map<string, number> => {
    return words.reduce((map, word) => {
        map.set(word, (map.get(word) ?? 0) + 1);
        return map;
    }, new Map<string, number>());
};

export default countWordFrequency;

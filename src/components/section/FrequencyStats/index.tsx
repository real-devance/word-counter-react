import styles from './FrequencyStats.module.scss';
import sortMapByValue from '../../../utility/sortMapByValue';
import { useState, useMemo } from 'react';

// Define the type for component props
type FrequencyStatsProps = {
  wordFrequencyMap: Map<string, number>; // Map of words to their frequency counts
};

// Define possible sorting options
type SortType = 'ascending' | 'descending';

function FrequencyStats({ wordFrequencyMap }: FrequencyStatsProps) {
  // State for sorting type with default value 'descending'
  const [sortType, setSortType] = useState<SortType>('descending');

  // Memoize the sorted word map based on sortType and wordFrequencyMap
  const sortedWordMap = useMemo(() => sortMapByValue(wordFrequencyMap, sortType), [wordFrequencyMap, sortType]);

  // Event handler for changing the sorting option
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as SortType); // Update sortType with selected value
  };

  return (
    <section className={styles.frequency_stats_section}>
      <h2 className="text-md font-bold">Word Frequency</h2> 

      <div className={styles.custom_select}>
        <select
          aria-label='sort-word-frequency'
          id="frequencySort"
          value={sortType} 
          className='text-base font-normal'
          onChange={handleOptionChange} 
        >
          <option value="ascending">Ascending</option> 
          <option value="descending">Descending</option>
        </select>
      </div>
     

      <ul className={styles.freq_list}>
        {Array.from(sortedWordMap.entries()).map(([word, count]) => (
          <li key={word} className="text-md font-semi-bold">
            <p>{word}</p> {/* Word */}
            <p>{count}</p> {/* Frequency count */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FrequencyStats;

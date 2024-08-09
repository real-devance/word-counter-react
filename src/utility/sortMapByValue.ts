type SortOrder = 'ascending' | 'descending';

/**
 * Sorts a map by its values.
 *
 * @param map - The map to sort.
 * @param order - The order to sort the map by ('ascending' or 'descending').
 * @returns A new map sorted by its values.
 *
 * @example
 * const map = new Map([['a', 3], ['b', 1], ['c', 2]]);
 * const sortedMapAsc = sortMapByValue(map, 'ascending');
 * console.log([...sortedMapAsc]); // [['b', 1], ['c', 2], ['a', 3]]
 *
 * const sortedMapDesc = sortMapByValue(map, 'descending');
 * console.log([...sortedMapDesc]); // [['a', 3], ['c', 2], ['b', 1]]
 */

const sortMapByValue = (map: Map<string, number>, order: SortOrder): Map<string, number> => {
  const sortedEntries = Array.from(map.entries()).sort(([, valueA], [, valueB]) => {
    if (order === 'ascending') {
      return valueA - valueB;
    } else if (order === 'descending') {
      return valueB - valueA;
    }
    return 0; // default case, though it should never reach here
  });
  
  return new Map(sortedEntries);
};

export default sortMapByValue;

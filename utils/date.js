/**
 * @name formatDate
 * @description Formats a given ISO date string into a readable string with the format "Month Day, Year".
 * @param {string} dateString - The ISO date string to be formatted.
 * @return {string} The formatted date string.
 * @example
 * // Returns "Jul 16, 2023"
 * formatDate('2023-07-16T00:00:00Z');
 *
 * // Returns "Jan 1, 2024"
 * formatDate('2024-01-01T00:00:00Z');
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  let options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};

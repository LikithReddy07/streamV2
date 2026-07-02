/**
 * Generates the PIN for the current day based on Indian Standard Time (IST).
 * IST is UTC+5:30.
 * @returns {string} The PIN in DDMMYYYY format.
 */
export const getTodaysPin = (): string => {
  // Get current date in UTC
  const now = new Date();

  // Create a new date object adjusted for IST (UTC + 5 hours 30 minutes)
  const istDate = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));

  const day = String(istDate.getUTCDate()).padStart(2, '0');
  const month = String(istDate.getUTCMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = istDate.getUTCFullYear();

  return `${day}${month}${year}`;
};
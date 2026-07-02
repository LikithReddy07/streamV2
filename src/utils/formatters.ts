export const formatDate = (timestamp: number): string => {
  if (!timestamp) return 'Date not available';
  return new Date(timestamp).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
};
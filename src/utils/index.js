export const getImageUrl = (url) => {
  const a = new URL(`/src/assets/${url}`, import.meta.url);
  return a.href;
};
export const getImageUrl = (url) => {
  console.log(`/src/assets/${url}.png`);
  const a = new URL(`/src/assets/${url}`, import.meta.url);
    console.log(a);
  return a.href;
};
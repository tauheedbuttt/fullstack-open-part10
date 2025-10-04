export const formatNumber = (number) => {
  if (number < 1000) {
    return String(number);
  } else if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
};

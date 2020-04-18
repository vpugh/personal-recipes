export const replaceFractions = (text) => {
  let newText = text;
  if (newText.includes('1/2')) {
    const half = newText.replace(/1\/2/g, `\u00BD`);
    newText = half;
  }
  if (newText.includes('1 /2')) {
    const half = newText.replace(/1\s\/2/g, `\u00BD`);
    newText = half;
  }
  if (newText.includes('1/4')) {
    const quarter = newText.replace(/1\/4/g, '\u00BC');
    newText = quarter;
  }
  if (newText.includes('1 /4')) {
    const quarter = newText.replace(/1\s\/4/g, '\u00BC');
    newText = quarter;
  }
  if (newText.includes('1/3')) {
    const third = newText.replace(/1\/3/g, `\u2153`);
    newText = third;
  }
  if (newText.includes('1 /3')) {
    const third = newText.replace(/1\s\/3/g, `\u2153`);
    newText = third;
  }
  if (newText.includes('3/4')) {
    const threeFourths = newText.replace(/3\/4/g, `\u00BE`);
    newText = threeFourths;
  }
  if (newText.includes('3 /4')) {
    const threeFourths = newText.replace(/3\s\/4/g, `\u00BE`);
    newText = threeFourths;
  }
  if (newText.includes('1/8')) {
    const oneEigth = newText.replace(/1\/8/g, `\u215B`);
    newText = oneEigth;
  }
  if (newText.includes('1 /8')) {
    const oneEigth = newText.replace(/1\s\/8/g, `\u215B`);
    newText = oneEigth;
  }
  return newText;
};

export const upperCaseFirst = (string) => {
  if (Array.isArray(string)) {
    return string[0].charAt(0).toUpperCase() + string[0].slice(1);
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const removeSeparate = (arr) => {
  return arr.filter((x) => Object.keys(x).toString() !== 'separate');
};

export const limitSortReverseArray = (
  arr,
  limit,
  type,
  sortType = 'forward'
) => {
  const sortedArray = arr.concat().sort((a, b) => {
    if (a[type] > b[type]) {
      return sortType === 'forward' ? 1 : -1;
    }
    if (a[type] < b[type]) {
      return sortType === 'forward' ? -1 : 1;
    }
    return 0;
  });
  return sortedArray.slice(0, limit - 1);
};

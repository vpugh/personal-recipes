import NameList from '../data/name-list.json';

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
  if (arr) {
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
  }
  return [];
};

export const limitSortType = (arr, limit, recipeType) => {
  const courseOptions = [];
  for (let i in arr) {
    var item = arr[i];
    if (item[recipeType] !== '') {
      const selectedOptions = item[recipeType];
      courseOptions.push(selectedOptions);
    }
  }
  return [...new Set(courseOptions.flat())];
  // return sortedArray.slice(0, limit - 1);
};

export const displayTotalTime = (cook, prep) => {
  const total = cook + prep;
  if (total > 60) {
    return toHour(Math.floor(total / 60));
  }
  return `${Math.floor(total)} mins`;
};

const toHour = (time) => {
  return `${time} ${time > 1 ? 'hrs' : 'hr'}`;
};

export const removeUrlDashes = (text) => {
  if (text.includes('-')) {
    const n = text.split('-');
    const first = n[0];
    const second = n[1];
    return `${first}${[upperCaseFirst(second)]}`;
  } else {
    return text;
  }
};

export const getNameListConversion = (name, type) => {
  return NameList[removeUrlDashes(name)][type];
};

export const capitalize = (str) => {
  str = str.split(' ');

  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(' ');
};

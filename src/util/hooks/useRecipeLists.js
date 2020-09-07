import { useState, useEffect } from 'react';
import {
  getCourses,
  getCuisines,
  getMainDishes,
  getUserTags,
} from '../../util/api';

const filterList = (list, removedContent) => {
  return list.filter((x) => removedContent.includes(x) === false);
};

const fetchList = async (set, user, getList, listType, filter = true) => {
  let list;
  if (listType === 'tags') {
    list = await getList(user.key);
  } else {
    list = await getList();
  }
  if (!list.error && filter) {
    const userRemoved = (user && user.settings[0][listType]) || [];
    set(filterList(list, userRemoved));
  } else {
    set(list);
  }
};

const useRecipeLists = (user) => {
  const [courseList, setCourseList] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [mainsList, setMainsList] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    fetchList(setCourseList, user, getCourses, 'courses');
    fetchList(setCuisineList, user, getCuisines, 'cuisines');
    fetchList(setMainsList, user, getMainDishes, 'mains');
    fetchList(setTagsList, user, getUserTags, 'tags', false);
  }, [user]);
  return {
    courseList,
    cuisineList,
    mainsList,
    tagsList,
    setTagsList,
  };
};

export default useRecipeLists;

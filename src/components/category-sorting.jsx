import React from 'react';
import ListedRecipes from './listed-recipes';

const createCourseOptions = (arr, name) => {
  const courseOptions = [];
  for (let i in arr) {
    var item = arr[i];
    const selectedOptions = item[name];
    courseOptions.push(selectedOptions);
  }
  return [...new Set(courseOptions.flat())];
};

const categoryList = (arr, option, name) =>
  arr.filter((x) => x[name].includes(option) === true);

const CategorySorting = (props) => {
  const { categoryArray, categoryName } = props;
  const courseOptions = createCourseOptions(categoryArray, categoryName);

  return courseOptions.map((option) => {
    return (
      <React.Fragment key={option}>
        <div style={{ borderBottom: '1px solid #ddd', marginBottom: 10 }}>
          <h3 style={{ marginBottom: '.75rem' }}>{option}</h3>
        </div>
        <div style={{ marginBottom: 50 }}>
          {categoryList(categoryArray, option, categoryName).map(
            (category, index) => (
              <ListedRecipes
                key={`${category.title} ${index}`}
                recipe={category}
                index={index}
                arrLength={
                  categoryList(categoryArray, option, categoryName).length
                }
              />
            )
          )}
        </div>
      </React.Fragment>
    );
  });
};

export default CategorySorting;

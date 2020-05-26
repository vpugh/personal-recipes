import React from 'react';
import { upperCaseFirst } from '../util/helper-functions';

const NestedArray = props => {
  const { listArray } = props;
  if (listArray) {
    return listArray.map(arr => {
      const title = Object.keys(arr);
      const capitalizedTitle = upperCaseFirst(title.toString());
      const nestedArray = arr[title];
      const hasContent = nestedArray.length > 0;
      if (title !== 'separated') {
        return (
          <React.Fragment key={title}>
            <p>{capitalizedTitle}</p>
            {hasContent &&
              nestedArray.map((na, index) => (
                <p key={index}>
                  {na} {index}
                </p>
              ))}
          </React.Fragment>
        );
      } else {
        return null;
      }
    });
  }
  return null;
};

export default NestedArray;

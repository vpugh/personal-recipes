import React from 'react';
import MultipleColumnList from './list-types/multiple-column-list';
import SingleColumnList from './list-types/single-column-list';

const GenerateList = ({ arr, header, columns = 1, showFractions }) => {
  if (arr.length > 0) {
    return (
      <div>
        <h2 style={{ fontSize: '1.4rem' }}>{header}</h2>
        {arr.length > 5 && columns > 1 ? (
          <MultipleColumnList showFractions={showFractions} list={arr} />
        ) : (
          <SingleColumnList showFractions={showFractions} list={arr} />
        )}
      </div>
    );
  }
  return null;
};

export default GenerateList;

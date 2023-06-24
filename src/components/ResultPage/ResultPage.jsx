import React from 'react';
import { CustomContainer } from '../CustomComponents/CustomContainer/CustomContainer';
import { SearchResultSummary } from './SearchResultSummary';

const ResultPage = () => {
  return (
    <CustomContainer>
      <SearchResultSummary/>      
    </CustomContainer>
  )
}

export { ResultPage }
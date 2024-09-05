import React from 'react'
import BBSCard from './BBSCard';
import { BBSDataType } from '../types/types';

interface BBSAllDataProps {
  bbsAllData: BBSDataType[];
}

const BBSCardlist = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSDataType) => (
        <BBSCard key={bbsData.id} bbsData={bbsData}/>
      ))}
    </div>
  );
};

export default BBSCardlist

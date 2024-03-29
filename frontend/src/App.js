import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopulation } from './redux/slice/population';
import Graph from './Components/Graph';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { data: populationData } = useSelector(state => state.population);
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchPopulation());
  }, [dispatch]);

  const handlePrevYear = () => {
    setCurrentYearIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextYear = () => {
    setCurrentYearIndex(prevIndex => Math.min(prevIndex + 1, populationData.length - 1));
  };

  const currentYearData = populationData ? populationData[currentYearIndex] : null;

  return (
    <div>
      <h1>Population Data</h1>
      {populationData && currentYearData && (
        <div>
          <h2>Year: {currentYearData.year}</h2>
          <h2>Population 65+: {currentYearData.population_65plus}</h2>
          <h2>Population 25-64: {currentYearData.population_25to64}</h2>
          <h2>Population 15-24: {currentYearData.population_15to24}</h2>
          <h2>Population 5-14: {currentYearData.population_5to14}</h2>
          <h2>Population 0-4: {currentYearData.population_0to4}</h2>

          <button onClick={handlePrevYear}>Previous Year</button>
          <button onClick={handleNextYear}>Next Year</button>

          <Graph currentYearData={currentYearData} />
        </div>
      )}
    </div>
  );
}

export default App;


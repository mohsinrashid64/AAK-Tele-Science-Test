import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopulation } from './redux/slice/population';
import Graph from './Components/Graph';
import './styleSheets/App.css';

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
    <div className="container">
      <h1>Pakistans Population Data</h1>
      {populationData && currentYearData && (
        <div>
          <h2>Year: {currentYearData.year}</h2>
          <Graph currentYearData={currentYearData} />
          <button onClick={handlePrevYear}>Previous Year</button>
          <button onClick={handleNextYear}>Next Year</button>
        </div>
      )}
    </div>

  );
}

export default App;


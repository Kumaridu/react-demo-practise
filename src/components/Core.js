import List from './List';
import Filter from './Filter';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Core(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [programmingList, setProgrammingList] = useState([]);
  const [selectedParadigms, setSelectedParadigms] = useState([]);

  const [selectedInterval, setselectedInterval] = useState('');

  const checkParadigm = (paradigm) => {
    console.log('App: ' + paradigm);
    const updatedSelectedParadigms = [...selectedParadigms];
    if (!updatedSelectedParadigms.includes(paradigm)) {
      updatedSelectedParadigms.push(paradigm);
    } else {
      let index = updatedSelectedParadigms.indexOf(paradigm);
      updatedSelectedParadigms.splice(index, 1);
    }
    setSelectedParadigms(updatedSelectedParadigms);
  };

  const handleSelectInterval = (interval) => {
    setselectedInterval(interval);
  };

  const resetFilter = () => {
    // setSelectedParadigms([]);
    // setselectedInterval('');
    props.appId();
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/programmingLangs', {
        headers: {
          Authorization: 'Bearer 5zmnlCPhCGUNZNJWOY22VM92EAhoiBYJ',
        },
      })
      .then((response) => {
        setIsLoading(false);
        setProgrammingList(response.data);
      });
  }, []);

  const filterByParadigm = (programmingList) => {
    if (selectedParadigms.length === 0) {
      return programmingList;
    } else {
      return programmingList.filter((language) => {
        let count = 0;
        for (const paradimg of selectedParadigms) {
          if (language.paradigms.includes(paradimg)) {
            count++;
          }
        }
        if (count === selectedParadigms.length) {
          return language;
        }
      });
    }
  };

  const filterByInterval = (programmingList) => {
    if (selectedInterval === '') {
      return programmingList;
    } else {
      return programmingList.filter((language) => {
        const [min, max] = selectedInterval.split('-');
        let firstReleaseYear = new Date(language.firstReleaseDate);
        let releaseYear = firstReleaseYear.getFullYear();
        if (releaseYear >= min && releaseYear <= max) {
          return language;
        }
      });
    }
  };

  const filter = (programmingList) => {
    if (selectedInterval !== '') {
      programmingList = filterByInterval(programmingList);
    }
    if (selectedParadigms.length !== 0) {
      programmingList = filterByParadigm(programmingList);
    }
    return programmingList;
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <div className="bg-gray-200 flex h-screen w-screen flex-col p-5">
      <h1 className="text-3xl font-bold">Programming Languages</h1>
      <div className="flex lg:flex-row flex-col mt-5">
        <Filter
          onSelectParadigm={checkParadigm}
          onSelectInterval={handleSelectInterval}
          resetFilter={resetFilter}
        />
        <List programmingList={filter(programmingList)} />
      </div>
    </div>
  );
}

export default Core;

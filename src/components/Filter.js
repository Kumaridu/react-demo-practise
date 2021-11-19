import { useState } from 'react';

const paradigms = [
  'Object-oriented programming',
  'Functional programming',
  'Procedural programming',
];

const intervals = ['1990-1995', '1995-2000', '2001-2005', '2006-2010'];

function Filter(props) {
  return (
    <div className="md:w-1/4 w-full h-full">
      <div className="flex justify-between items-end mt-2">
        <h1 className="text-2xl font-medium">Filter By</h1>
        <button
          className="text-blue-600 hover:underline"
          onClick={() => {
            console.log('I am clicked');
            props.resetFilter();
          }}
        >
          Reset All
        </button>
      </div>
      <div className="mt-10">
        <h4 className="text-lg font-bold">Paradigms</h4>
        <div className="mt-2">
          {paradigms.map((paradigm) => {
            return (
              <div key={paradigm}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="lg1"
                    value={paradigm}
                    onChange={(event) => {
                      props.onSelectParadigm(event.target.value);
                    }}
                  />
                  <span className="ml-2">{paradigm}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-lg font-bold">Release Year</h4>
        <div className="mt-2">
          {intervals.map((interval) => {
            return (
              <div key={interval}>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="releaseYear"
                    value={interval}
                    onChange={(event) => {
                      props.onSelectInterval(event.target.value);
                    }}
                  />
                  <span className="ml-2">{interval}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;

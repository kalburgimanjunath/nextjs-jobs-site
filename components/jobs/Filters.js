import React, { useState } from 'react';
export default function Filters({ setSearchText, setSortText }) {
  const [searchTxt, setSearchTextValue] = useState('');
  const [sorttext, setChangeSort] = useState('');

  return (
    <div>
      <h5>Search</h5>
      <input
        type="text"
        value={searchTxt}
        className="search-filter-job"
        onChange={(e) => {
          setSearchTextValue(e.target.value);
          setSearchText(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setChangeSort(e.target.value);
          setSortText(e.target.value);
        }}
        value={sorttext}
        selected={sorttext}
      >
        <option value="title">Title</option>
        <option value="date">Date</option>
        <option value="compnay">company</option>
      </select>
    </div>
  );
}

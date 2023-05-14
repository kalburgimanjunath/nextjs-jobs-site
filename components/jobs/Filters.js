import React, { useState } from 'react';
export default function Filters() {
  const [searchTxt, setSearchText] = useState('');
  return (
    <div>
      <div>Search</div>
      <input
        type="text"
        value={searchTxt}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

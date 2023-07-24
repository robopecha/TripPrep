import { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by destination, country, or season..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 mb-10 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Search</button>
    </form>
  );
};

export default SearchForm;

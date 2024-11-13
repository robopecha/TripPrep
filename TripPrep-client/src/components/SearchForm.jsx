import React from 'react';
import BlueButton from "../components/BlueButton";
import { createBrowserHistory } from 'history';


function SearchForm({ handleSearch }) {
  const history = createBrowserHistory();
  const [searchQuery, setSearchQuery] = React.useState('');

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(searchQuery);
    history.push(`?q=${encodeURIComponent(searchQuery)}`);
  }

  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by destination, country or season..."
        value={searchQuery}
        className="border border-black rounded-sm w-11/12 h-10"
        onChange={handleChange}
      />
      <BlueButton type="submit" className="mb-10 ml-1">Search</BlueButton>
    </form>
  );
}


export default SearchForm;

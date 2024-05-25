
import BookDisplay from "../components/books/BookDisplay";
import FilterBookExplore from "../components/FilterBookExplore";
import WrapBar from "../components/WrapBar";
import React, { useEffect, useState } from "react";
const apiUrl = "http://localhost:8080/api/v1";
export default function Explore() {

  const [searchResult, setsearchResult] = useState([]);
  const [query, setQuery] = useState(''); // Add state for query parameter
  const [page, setPage] = useState(0); // Add state for pagination (default: 0)
  const [size, setSize] = useState(60); // Add state for size (default: 50)
  const [selectedFilter, setSelectedFilter] = useState('all');

  const fetchData = async () => {
    const url = new URL(`${apiUrl}/books/search`, window.location.origin); // More robust URL construction
    url.searchParams.append('q', query); // Append query parameter
    url.searchParams.append('page', page); // Append page parameter
    url.searchParams.append('size', size); // Append size parameter

    const response = await fetch(url.toString());

    const data = await response.json();
    console.log(data);
    setsearchResult(data);
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    if (event.target.value === 'author') {
      fetchData(new URL(`${apiUrl}/books/search-sort-by-author`, window.location.origin)); // Call author search API
    } else if (event.target.value === 'title') {
      fetchData(new URL(`${apiUrl}/books/search-sort-by-title`, window.location.origin));
    }
  };



  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <WrapBar>
      <div className="w-full">
        <div className="mt-4 w-full flex justify-between items-center">
          <h1 className="font-black text-lg">Search result ({searchResult.length})</h1>
          <div className="flex items-center">
            <input
              type="text"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search books..."
              value={query}
              onChange={handleSearch}
            />
            <button
              className="ml-2 bg-blue-500 text-white font-bold py-2 px-3 rounded-md hover:bg-blue-700"
              onClick={fetchData} // Trigger fetch on search button click
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-10 mt-4">
          <div className="col-span-8 px-10 mt-4">
            <div className="w-full h-full grid grid-cols-4 gap-3 gap-y-10">

              
               {
              
              
              searchResult.map((b) => (
                <BookDisplay book={b} key={b.id} /> // Add unique key for each book
              ))}
            </div>
          </div>
          <div className="col-span-2 pt-4 pr-4">
          <div className="col-span-2 pt-4 pr-4">
      <FilterBookExplore onFilterChange={handleFilterChange} />
    </div>
          </div>
        </div>
      </div>
    </WrapBar>
  );
}

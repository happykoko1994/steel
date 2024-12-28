import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { useFilters } from "./hooks/useFilters";
import SearchResults from "./components/SearchResults";
import FilterControls from "./components/FilterControls";
import useFilteredData from "./hooks/useFilteredData";
import { getPositionsWord } from "./utils";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filters, tempFilters, handleFilterChange, applyFilters, clearFilters } = useFilters();

  const filteredData = useFilteredData(searchQuery, filters);

  const isFiltersApplied = Object.values(filters).some((filter) => filter !== "");

  return (
    <div className="min-h-screen p-4">
      <div className="w-full bg-white p-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {(searchQuery?.trim() || isFiltersApplied) && (
          <div className="text-sm text-gray-600 mt-2">
            {filteredData.length > 0
              ? `${filteredData.length} ${getPositionsWord(filteredData.length)} найдено`
              : ""}
          </div>
        )}

        <SearchResults
          filteredData={filteredData}
          searchQuery={searchQuery}
          isFiltersApplied={isFiltersApplied}
        />

        <FilterControls
          tempFilters={tempFilters}
          handleFilterChange={handleFilterChange}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  );
};

export default App;
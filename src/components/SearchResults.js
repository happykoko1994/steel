import React from "react";

const SearchResults = ({ filteredData, searchQuery, isFiltersApplied }) => {
  return (
    <div className="mb-4">
      {(searchQuery.trim() || isFiltersApplied) && filteredData.length > 0 ? (
        <div className="overflow-y-auto max-h-60">
          {filteredData.map((result) => (
            <div
              key={result.id}
              className="font-manrope text-xl font-bold mb-2 text-left"
            >
              <div>{`${result.name} (${result.city})`}</div>
              <div className="text-sm text-gray-600 mt-2 flex flex-wrap">
                <span className="mr-4">
                  <strong>Категория:</strong> {result.category}
                </span>
                <span className="mr-4">
                  <strong>Размер:</strong> {result.size}
                </span>
                <span className="mr-4">
                  <strong>ГОСТ:</strong> {result.gost}
                </span>
                <span className="mr-4">
                  <strong>Наличие:</strong> {result.availability}
                </span>
                <span className="mr-4">
                  <strong>Марка:</strong> {result.brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>{(searchQuery.trim() || isFiltersApplied) && "Нет результатов"}</div>
      )}
    </div>
  );
};

export default SearchResults;
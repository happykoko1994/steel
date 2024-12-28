import React from "react";
import FiltersPanel from "./FiltersPanel";
import Button from "./Button";

const FilterControls = ({ tempFilters, handleFilterChange, applyFilters, clearFilters }) => {
  return (
    <div>
      <FiltersPanel filters={tempFilters} onFilterChange={handleFilterChange} />
      <div className="flex justify-end space-x-4 mt-4">
        <Button
          onClick={clearFilters}
          label="Очистить фильтры"
          className="border-[1px] border-[rgba(0,0,0,0.3)] bg-transparent text-[14px] font-[400] text-[rgba(0,0,0,0.3)] px-4 py-2 rounded-[99px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <Button
          onClick={applyFilters}
          label="Применить фильтры"
          className="bg-[rgba(27,64,244,1)] text-white text-[14px] font-[400] px-4 py-2 rounded-[99px] hover:bg-[rgba(27,64,244,0.8)] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default FilterControls;
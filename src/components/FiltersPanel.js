import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import mockData from "../data/mockData";

const FiltersPanel = ({ filters, onFilterChange }) => {
  const [filterOptions, setFilterOptions] = useState({
    category: [],
    size: [],
    gost: [],
    availability: [],
    brand: [],
    city: [],
  });

  const getUniqueValues = (field) => {
    const values = mockData.map((item) => item[field]);
    return [...new Set(values)];
  };

  useEffect(() => {
    setFilterOptions({
      category: getUniqueValues("category"),
      size: getUniqueValues("size"),
      gost: getUniqueValues("gost"),
      availability: getUniqueValues("availability"),
      brand: getUniqueValues("brand"),
      city: getUniqueValues("city"),
    });
  }, []);

  const filterPlaceholders = {
    category: "Категория",
    size: "Размер",
    gost: "ГОСТ",
    availability: "Наличие",
    brand: "Марка",
    city: "Город",
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center justify-center">
        <img src="/settings.png" alt="Settings" className="w-[32px] h-[32px] mr-6" />
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {Object.keys(filters).map((key) => (
          <Filter
            key={key}
            value={filters[key]}
            options={filterOptions[key]}
            onChange={(value) => onFilterChange(key, value)}
            placeholder={filterPlaceholders[key]}
          />
        ))}
      </div>
    </div>
  );
};

export default FiltersPanel;
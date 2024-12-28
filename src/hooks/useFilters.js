import { useState } from "react";
import { resetFilters } from "../utils";

export const useFilters = () => {
  const [filters, setFilters] = useState(resetFilters());
  const [tempFilters, setTempFilters] = useState(filters);

  const handleFilterChange = (filterName, value) => {
    setTempFilters({ ...tempFilters, [filterName]: value });
  };

  const applyFilters = () => {
    setFilters(tempFilters);
  };

  const clearFilters = () => {
    setFilters(resetFilters());
    setTempFilters(resetFilters());
  };

  return { filters, tempFilters, handleFilterChange, applyFilters, clearFilters };
};

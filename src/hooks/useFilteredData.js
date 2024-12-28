import { useState, useEffect } from "react";
import mockData from "../data/mockData";

const useFilteredData = (searchQuery, filters) => {
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      const applyFilters = () => {
        let results = mockData;
        if (searchQuery.trim()) {
          results = results.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        Object.keys(filters).forEach((key) => {
          if (filters[key] && filters[key].trim() !== "") {
            results = results.filter((item) => item[key] === filters[key]);
          }
        });
  
        return results;
      };
  
      const results = applyFilters();
      setFilteredData(results);
    }, [searchQuery, filters]);
  
    return filteredData;
  };

export default useFilteredData;

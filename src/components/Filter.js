import React, { useState, useEffect, useRef } from "react";

const Filter = ({ value, options, onChange, placeholder, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const filterRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleClearSelection = () => {
    setSelectedOption("");
    onChange("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const isSelected = selectedOption !== undefined && selectedOption !== "";

  return (
    <div className="relative" ref={filterRef}>
      <div
        className={`border border-[#0000004D] rounded-[10px] p-2 flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out 
        ${isSelected ? "border-[rgba(27,64,244,1)] bg-[rgba(242,244,255,1)] text-[rgba(27,64,244,1)]" : ""}  
        ${!isSelected ? "hover:border-[rgba(27,64,244,1)] hover:bg-[rgba(242,244,255,1)] hover:text-[rgba(27,64,244,1)]" : ""} 
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span 
          className={`text-[16px] font-[400] leading-[24px] 
            ${isSelected ? "text-[rgba(27,64,244,1)]" : "text-[rgba(0,0,0,0.3)]"}`}>
          {selectedOption || placeholder}
        </span>
        <img src="/arrow.png" alt="arrow" className="w-[12px] h-[6px]" />
      </div>

      {isSelected && (
        <button
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-blue-500"
          onClick={handleClearSelection}
        >
          Очистить
        </button>
      )}

      {isOpen && (
        <div
          className="absolute left-0 w-full bg-white rounded-[10px] mt-0 z-50 top-0 shadow-[0px_6px_24px_0px_rgba(0,0,0,0.12)]"
          style={{
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelectOption(option)}
              className="p-2 cursor-pointer hover:bg-gray-100 text-[16px] font-[400] text-[rgba(0,0,0,1)] rounded-[10px] transition-all duration-300 ease-in-out"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
export const getPositionsWord = (count) => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "позиция";
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    !(count % 100 >= 12 && count % 100 <= 14)
  ) {
    return "позиции";
  } else {
    return "позиций";
  }
};

export const resetFilters = () => ({
  category: "",
  size: "",
  gost: "",
  availability: "",
  brand: "",
  city: "",
});

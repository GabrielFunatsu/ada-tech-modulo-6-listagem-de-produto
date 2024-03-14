import { useEffect, useState } from "react";

const useFilter = (list, term, criterion) => {
  const [filtered, setFiltered] = useState([]);

  const filter = () => {
    return list.filter((item) =>
      item[criterion].toLowerCase().includes(term.toLowerCase())
    );
  };

  useEffect(() => {
    setFiltered(filter());
  }, [term, criterion]);

  return {
    filtered,
  };
};

export { useFilter };

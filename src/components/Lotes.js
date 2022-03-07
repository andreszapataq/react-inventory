import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";

const Lotes = () => {
  let location = useLocation();
  const item = location.state?.item;
  const [filteredBodegas, setFilteredBodegas] = useState([]);

  useEffect(() => {
    setFilteredBodegas(item.lotes); // TODO: Esta es la solucion
  }, [item]);

  const handleChange = (filteredData) => {
    setFilteredBodegas(filteredData);
  };

  return (
    <div className="list-section">
      <SearchBar
        data={item.lotes}
        handleChange={handleChange}
        filterBy="lote"
      />
      {filteredBodegas?.map((el, index) => (
        <div className="item" key={index}>
          <h3 className="text-lote-xl">{el.lote}</h3>
          <p>{el.fecha_vencimiento}</p>
        </div>
      ))}
    </div>
  );
};

export default Lotes;

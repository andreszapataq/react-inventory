import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import Lote from "./Lote";

const Lotes = () => {
  let location = useLocation()
  const item = location.state?.item
  const bodega = location.state?.bodega
  const [filteredBodegas, setFilteredBodegas] = useState([])

  useEffect(() => {
    setFilteredBodegas(item.lotes)
  }, [item]);

  const handleChange = (filteredData) => {
    setFilteredBodegas(filteredData)
  }

  return (
    <div className="list-section">
      <SearchBar
        data={item.lotes}
        handleChange={handleChange}
        filterBy="lote"
      />
      {filteredBodegas?.map((el, index) => (
        <div key={index}>
          <Link to={`/lotepage/${index}`} state={{ el, bodega }}>
            <Lote el={el} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Lotes;

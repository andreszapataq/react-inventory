import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Item from "./Item";

import SearchBar from "./SearchBar";

const Inventario = () => {
  let location = useLocation();
  const bodega = location.state?.bodega;
  let stock = bodega?.stock;

  const [filteredBodegas, setFilteredBodegas] = useState([]);

  const handleChange = (filteredData) => {
    parseStock(filteredData); // TODO: El resultado habia que parsearlo otra vez
  };

  useEffect(() => {
    parseStock(stock);
  }, [stock]);

  const parseStock = (stockArg) => {
    const newStock = [];
    const uniqueCodigos = [];

    stockArg?.forEach((item) => {
      // Si el codigo existe en el array, +1 la cantidad
      if (uniqueCodigos.includes(item.codigo)) {
        newStock.forEach((newItem) => {
          if (newItem.codigo === item.codigo) {
            newItem.cantidad = newItem.cantidad + 1;
            newItem.lotes.push({
              lote: item.lote,
              fecha_vencimiento: item.fecha_vencimiento,
            });
          }
        });
      } else {
        // Si no existe en el array, agregarlo con cantidad 1
        newStock.push({
          codigo: item.codigo,
          nombre: item.nombre,
          lotes: [
            { lote: item.lote, fecha_vencimiento: item.fecha_vencimiento },
          ],
          cantidad: 1,
        });
        uniqueCodigos.push(item.codigo);
      }
    });

    newStock.sort((a, b) => (a.codigo > b.codigo ? 1 : -1));
    setFilteredBodegas(newStock);
  };

  return (
    <div className="list-section">
      <SearchBar data={stock} handleChange={handleChange} filterBy="nombre" />
      {filteredBodegas.map((item, index) => (
        <div key={index}>
          <Link to={`/lotes/${index}`} state={{ item, bodega }}>
            <Item key={index} item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Inventario;

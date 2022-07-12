import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import SearchBar from "./SearchBar";
import Item from "./Item";

const Inventario = () => {
  let location = useLocation()
  const bodega = location.state?.bodega
  let stock = bodega?.stock

  const [filteredBodegas, setFilteredBodegas] = useState([])

  /* const handleChange = (filteredData) => {
    inventarioCodigos(filteredData)
  }; */

  useEffect(() => {
    // parseStock(stock)
    inventarioCodigos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const inventarioCodigos = () => {
    const counts = []
    
    const codigos = stock.map((element) => (
      element.referencia.codigo
    ))

    console.log(codigos)

    codigos.forEach((x) => { counts[x] = (counts[x] || 0) + 1 })
    
    setFilteredBodegas(counts);

    console.log(counts)
  }

  /* const parseStock = (stockArg) => {
    const newStock = [];
    const uniqueCodigos = [];

    console.log(stockArg)

    stockArg?.forEach((item) => {
      // Si el codigo existe en el array, +1 la cantidad
      if (uniqueCodigos.includes(item.referencia.codigo)) {
        newStock.forEach((newItem) => {
          if (newItem.codigo === item.referencia.codigo) {
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
          codigo: item.referencia.codigo,
          nombre: item.referencia.nombre,
          lotes: [
            { lote: item.lote, fecha_vencimiento: item.fecha_vencimiento },
          ],
          cantidad: 1,
        });
        uniqueCodigos.push(item.referencia.codigo);
      }
    });

    newStock.sort((a, b) => (a.codigo > b.codigo ? 1 : -1));
    // setFilteredBodegas(newStock);
    
  }; */

  return (
    <div className="list-section">
      {/* <SearchBar data={stock} handleChange={handleChange} filterBy="nombre" /> */}
      {filteredBodegas.map((item, index) => (
        <div key={index}>
          <Link to={`/lotes/${index}`} state={{ item, bodega }}>
            <Item item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Inventario;

import { Link, useLocation } from "react-router-dom";
import Item from "./Item";

const Inventario = () => {
  let location = useLocation();
  const bodega = location.state.bodega;

  let stock = bodega.stock;
  console.log("gz stock:", stock);

  const newStock = [];
  let uniqueCodigos = [];

  stock.forEach((item) => {
    // si el codigo existe en el array, +1 la cantidad
    if (uniqueCodigos.includes(item.codigo)) {
      newStock.forEach((newItem) => {
        if (newItem.codigo === item.codigo) {
          newItem.cantidad = newItem.cantidad + 1;
        }
      });
    } else {
      // si no existe en el array, agragarlo con cantidad 1
      newStock.push({
        nombre: item.nombre,
        codigo: item.codigo,
        cantidad: 1,
      });
      uniqueCodigos.push(item.codigo);
    }
  });

  return (
    <div>
      {newStock
        .sort((a, b) => (a.codigo > b.codigo ? 1 : -1))
        .map((item, index) => (
          <div key={index}>
            <Link to={`/lotes/${index}`} state={{ item }}>
              <Item key={index} item={item} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Inventario;

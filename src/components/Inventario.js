import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
  let location = useLocation()
  // let bodega = location.state.bodega;
  const [bodega, setBodega] = useState([])
  const [newStock, setNewStock] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5004/api/v1/inventario')
      let datax = await res.json()
      console.log(datax.data[location.pathname.split('/').pop()])
      setBodega(datax.data[location.pathname.split('/').pop()])
    }
    
    if(!location.state) {
      fetchData()
    }
    else {
      setBodega(location.state.bodega)
    }
  }, [location.state])

  useEffect(() => {
    if(bodega.stock) {
      funcShit()
    }
  }, [bodega])

  const funcShit = () => {
    const uniqueCodigos = []

  bodega.stock.forEach((item) => {
    // Si el codigo existe en el array, +1 la cantidad
    if(uniqueCodigos.includes(item.codigo)) {
      newStock.forEach((newItem) => {
        if(newItem.codigo === item.codigo) {
          newItem.cantidad = newItem.cantidad + 1
          newItem.lotes.push({lote: item.lote, fecha_vencimiento: item.fecha_vencimiento})
        }
      })
    } else {
        // Si no existe en el array, agregarlo con cantidad 1
        newStock.push({
            codigo: item.codigo,
            nombre: item.nombre,
            lotes: [{lote: item.lote, fecha_vencimiento: item.fecha_vencimiento}],
            cantidad: 1
        })
        uniqueCodigos.push(item.codigo)
    }
  })

  newStock.sort((a, b) => (a.codigo > b.codigo ? 1 : -1))
  console.log(newStock)
  }

  return (
    <div>
      {newStock.map((item, index) => (
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

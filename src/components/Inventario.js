import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega

    console.log(bodega)
    
    let stock = bodega.stock
    console.log(stock)

    const codigoProductos = stock.map(value => value.codigo)
    console.log(codigoProductos)

    const nombreProductos = stock.map(value => value.nombre)
    console.log(nombreProductos)

    let unicos = []
    let repetidos = []
    let nombres = []
    let contador = 1

    for(let i = 0; i < codigoProductos.length; i++){
        if(codigoProductos[i + 1] === codigoProductos[i]){
            // console.log(`Se repite el producto ${codigoProductos[i]}`)
            contador++
        }
        else {
            unicos.push(codigoProductos[i])
            repetidos.push(contador)
            nombres.push(nombreProductos[i])
            contador = 1
        }
    }

    console.log(unicos)
    console.log(repetidos)
    console.log(nombres)

    const newStock = unicos.map(function (x, i) { 
        return { codigo: x, nombre: nombres[i], cantidad: repetidos[i] }
    })

    console.log(newStock)

    for(let j = 0; j < unicos.length; j++){
        console.log(`Del producto ${unicos[j]} existen ${repetidos[j]} unidades`)
    }

    // const unique = Array.from(new Set(productos))

    let parsedItems = []
    let parsedNombres = []
    
    for(let item of stock) {
        // console.log(item)
        if(parsedItems.includes(item.codigo)) {
            // item.cantidad = item.cantidad + 1
            // console.log("NO ESTÁ")
        }
        else {
            parsedItems.push(item.codigo)
            parsedNombres.push(item.nombre)
            // parsedItems.push(item.nombre)
            // item.cantidad = 1
        }
    }

    // console.log(unique)
    console.log(parsedItems.sort())
    console.log(parsedNombres.sort((a, b) => (a.codigo > b.codigo) ? 1 : -1))

    const newStock2 = parsedItems.map(function (x, i) { 
        return { codigo: x, nombre: parsedNombres[i], cantidad: repetidos[i] }
    })

    console.log(newStock2)

    return (
        <div>
            {newStock2.map((item, index) => (
                <div key={index}>
                    <Link to={`/lotes/${index}`} state={{item}} >
                        <Item key={index} item={item} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Inventario

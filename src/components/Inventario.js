import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega
    
    let stocx = bodega.stock.sort()
    console.log(stocx)

    const productos = stocx.map(value => value.codigo)
    console.log(productos)

    const nombreProductos = stocx.map(value => value.nombre)
    console.log(nombreProductos)

    let unicos = []
    let repetidos = []
    let list = []
    let contador = 1

    for(let i = 0; i < productos.length; i++){
        if(productos[i + 1] === productos[i]){
            // console.log(`Se repite el producto ${productos[i]}`)
            contador++
        }
        else {
            unicos.push(productos[i])
            repetidos.push(contador)
            list.push(nombreProductos[i])
            contador = 1
        }
    }

    console.log(unicos)
    console.log(repetidos)
    console.log(list)

    const newStock = unicos.map(function (x, i) { 
        return { codigo: x, cantidad: repetidos[i], nombre: list[i] }
    })

    console.log(newStock)

    for(let j = 0; j < unicos.length; j++){
        console.log(`Del producto ${unicos[j]} existen ${repetidos[j]} unidades`)
    }

    // const unique = Array.from(new Set(productos))
    // console.log(stocx)

    let parsedItems = []
    for(let itex of stocx) {
        // console.log(itex)
        if(parsedItems.includes(itex.codigo)) {
            // itex.cantidad = itex.cantidad + 1
            // console.log("NO ESTÁ")
        }
        else {
            parsedItems.push(itex.codigo)
            // parsedItems.push(itex.nombre)
            // itex.cantidad = 1
        }
    }

    // console.log(unique)
    // console.log(stocx)
    console.log(parsedItems.sort())

    return (
        <div>
            {newStock.map((item, index) => (
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

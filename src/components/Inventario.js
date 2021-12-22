import { Link, useLocation } from "react-router-dom"
import Item from "./Item"

const Inventario = () => {
    let location = useLocation()
    const bodega = location.state.bodega
    
    let stocx = bodega.stock
    const productos = bodega.stock.map(value => value.codigo).sort()
    console.log(productos)

    let unicos = []
    let repetidos = []
    let contador = 1

    for(let i = 0; i < productos.length; i++){
        if(productos[i + 1] === productos[i]){
            // console.log(`Se repite el producto ${productos[i]}`)
            contador++
        }
        else {
            unicos.push(productos[i])
            repetidos.push(contador)
            contador = 1
        }
    }

    console.log(unicos)
    console.log(repetidos)

    var armixed = unicos.map(function (x, i) { 
        return { categories: x, catid: repetidos[i] }
    })

    console.log(armixed)

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
            {bodega.stock.map((item, index) => (
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

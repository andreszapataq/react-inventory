import { useLocation } from "react-router-dom"

const Lotes = () => {
    let location = useLocation()
    const item = location.state.item

    console.log(item)
    
    return (
        <div className='item'>
            <h3>Lote</h3>
            <p>Fecha Vencimiento</p>
        </div>
    )
}

export default Lotes

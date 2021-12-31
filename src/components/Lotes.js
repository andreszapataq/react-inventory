import { useLocation } from "react-router-dom"

const Lotes = () => {
    let location = useLocation()
    const item = location.state.item
    
    return (
        <div>
            {item.lotes.map((lotes, index) => (
                <div className='item' key={index}>
                    <h3>{lotes.lote}</h3>
                    <p>{lotes.fecha_vencimiento}</p>
                </div>
            ))}
        </div>
    )
}

export default Lotes

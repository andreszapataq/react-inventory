import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import SearchBar from "./SearchBar"

const Lotes = () => {
    let location = useLocation()
    const item = location.state?.item

    console.log(item)

    const [filteredBodegas, setFilteredBodegas] = useState(item)

    const handleChange = (filteredData) => {
        setFilteredBodegas(filteredData)
    }

    useEffect(() => {
        setFilteredBodegas(item)
    }, [item])
    
    return (
        <div className="list-section">
            <SearchBar data={item.lotes} handleChange={handleChange} filterBy='lote' />
            {filteredBodegas.lotes.map((lotes, index) => (
                <div className='item' key={index}>
                    <h3 className="text-lote-xl">{lotes.lote}</h3>
                    <p>{lotes.fecha_vencimiento}</p>
                </div>
            ))}
        </div>
    )
}

export default Lotes

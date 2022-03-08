import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    const [filteredBodegas, setFilteredBodegas] = useState([])

    const handleChange = (filteredData) => {
        setFilteredBodegas(filteredData)
    }

    useEffect(() => {
        setFilteredBodegas(bodegas)
    }, [bodegas])
    
    return (
        <div className="list-section">
            <SearchBar data={bodegas} handleChange={handleChange} filterBy='nombre' />
            {filteredBodegas.map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={`/inventario/${index}`} state={{bodega}}>
                        <Bodega bodega={bodega} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Bodegas

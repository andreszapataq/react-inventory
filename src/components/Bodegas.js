import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    const [filteredBodegas, setFilteredBodegas] = useState(bodegas)

    const handleChange = (filteredData) => {
        setFilteredBodegas(filteredData)
    }

    useEffect(() => {
        setFilteredBodegas(bodegas)
    }, [bodegas])
    
    return (
        <div className="list-section">
            <SearchBar data={bodegas} handleChange={handleChange} />
            {filteredBodegas.map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={`/inventario/${index}`} state={{bodega}}>
                        <Bodega bodega={bodega} />
                    </Link>
                </div>
            ))}
            {/* <div className="search-inputs">
                <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input type="text" className="input-search" placeholder="Buscar..." value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
                }} />
                {searchTerm.length !== 0 && (
                    <div className="close-icon">
                        <FontAwesomeIcon icon={faXmark} className="btn-clear" onClick={clearInput} />
                    </div>
                )}
            </div>
            {bodegas.filter((element) => element.nombre.toLowerCase().includes(searchTerm.toLowerCase())).map((bodega, index) => (
                <div key={bodega._id}>
                    <Link to={`/inventario/${index}`} state={{bodega}}>
                        <Bodega bodega={bodega} />
                    </Link>
                </div>
            ))} */}
        </div>
    )
}

export default Bodegas

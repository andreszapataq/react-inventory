import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const clearInput = () => {
        setSearchTerm('')
    }
    
    return (
        <div>
            <div className="search-inputs">
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
            {bodegas.filter((val) => {
                if(searchTerm === '') {
                    return val
                }
                else if(val.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((bodega, index) => (
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

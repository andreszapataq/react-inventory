import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Bodega from "./Bodega"

const Bodegas = ({ bodegas, placeholder }) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
        <div>
            <div className="search-inputs">
                <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input type="text" className="input-search" placeholder={placeholder} onChange={(e) => {
                setSearchTerm(e.target.value)
                }} />
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

import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    return (
        <div>
            <SearchBar />
            {bodegas.map((bodega, index) => (
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

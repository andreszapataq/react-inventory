import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import Bodega from "./Bodega"

const Bodegas = ({ bodegas }) => {
    const [input, setInput] = useState('')
    const [dataDefault, setDataDefault] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    console.log(dataDefault)
    console.log(searchTerm)

    const getData = (bodegas) => {
        setDataDefault(bodegas)
        setSearchTerm(bodegas)
    }
    
    const updateInput = async (input) => {
        const filtered = searchTerm.filter(element => {
            return element.nombre.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setSearchTerm(filtered)
    }

    useEffect(() => {getData()}, [bodegas])
    
    return (
        <div>
            <SearchBar input={input} onChange={updateInput} />
            {searchTerm.map((bodega, index) => (
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

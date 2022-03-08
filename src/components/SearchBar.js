import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ data, handleChange, filterBy }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const clearInput = () => {
        setSearchTerm('')
    }

    const filtered = () => {        
        const filteredData = data.filter((element) => element[filterBy].toLowerCase().includes(searchTerm.toLowerCase()))
        handleChange(filteredData)
    }

    useEffect(() => {
        filtered()
    }, [searchTerm])
  
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
        </div>
    )
}

export default SearchBar

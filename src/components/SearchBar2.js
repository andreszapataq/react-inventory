import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar2 = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [searchEntered, setSearchEntered] = useState('')

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setSearchEntered(searchWord)
    const newFilter = data.filter((value) => {
       return value.nombre.toLowerCase().includes(searchWord.toLowerCase())
    })
    if(searchWord === '') {
      setFilteredData([])
    }
    else {
      setFilteredData(newFilter)
    } 
  }

  const clearInput = () => {
    setFilteredData([])
    setSearchEntered('')
  }
  
  return (
    <div className="search-wrapper">
      <div className="search-inputs">
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input type="text" className="input-search" placeholder={placeholder} value={searchEntered} onChange={handleFilter} />
        {searchEntered.length !==0 && (
          <div className="close-icon">
            <FontAwesomeIcon icon={faXmark} className="btn-clear" onClick={clearInput} />
        </div>
        )}
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 10).map((value, index) => {
            return <p key={index}>{value.nombre}</p>
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar2

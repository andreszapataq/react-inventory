const SearchBar = ({ placeholder, data }) => {
  return (
    <div className="search-wrapper">
        <input type="text" className="input-search" placeholder={placeholder} />
        <div className="data-result"></div>
    </div>
  )
}

export default SearchBar

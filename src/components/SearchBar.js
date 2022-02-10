const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-wrapper">
        <input type="text" className="input-search" placeholder={placeholder} />
    </div>
  )
}

export default SearchBar

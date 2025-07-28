 function SearchBar({ searchTerm, onChange }) {
  return (
    <div className="search">
      <label>Search Plants:</label>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

function SearchBar({ search, setSearch }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <input 
        type="text" 
        className="neo-input" 
        placeholder="🔍 Search ledger descriptions..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
export default SearchBar;
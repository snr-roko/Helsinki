const Filtered = ({searchString, handleSearchString}) => {
  return (
    <div>
      Filter Name with <input value={searchString} onChange={handleSearchString} />
    </div>

  )
}

export default Filtered
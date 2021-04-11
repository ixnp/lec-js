function SearchBar(props) {

    return (
        < >
            <label for="search">Search...</label>
            <input onChange={props.searchFilter} type="text" id="search" name="search"></input>
        </>
    )
}

export default SearchBar
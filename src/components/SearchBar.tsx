import episodeArr from "../episodes.json";
import filterEpisodes from "./FilterEpisodes"

interface searchProps {
    setSearchTerm(term: string): void
    searchTerm: string
}

function SearchBar(props: searchProps): JSX.Element {
    const episodeCount = filterEpisodes(episodeArr, props.searchTerm)

    return(
        <div className="searchBar">
            <div>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Search..."
                    onChange={(event) => {
                        props.setSearchTerm(event.target.value)}}
                />
                <select>
                    {filterEpisodes(episodeArr, props.searchTerm).map((ep) => (
                        <option key={ep.id}>
                            {ep.name} ({ep.id})
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p className="displayBar">Showing {episodeCount.length}/{episodeArr.length}</p>
            </div>
        </div>
        )

}

export default SearchBar;
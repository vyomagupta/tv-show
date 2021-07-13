import mapArray from "../episodes.json";
import {useState} from "react";
import filterEpisodes from "./FilterEpisodes"

interface searchProps {
   // setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setSearchTerm(term: string): void
    searchTerm: string
}

function SearchBar(props: searchProps): JSX.Element {
    const episodeCount = filterEpisodes(mapArray, props.searchTerm)

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
                    {filterEpisodes(mapArray, props.searchTerm).map((ep) => (
                        <option key={ep.id}>
                            {ep.name} ({ep.id})
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p className="displayBar">Displaying {episodeCount.length}/{mapArray.length}</p>
            </div>
        </div>
        )

}

export default SearchBar;
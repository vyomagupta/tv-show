import ShowEpisode from "./Episodes";
import mapArray from "../episodes.json";
import filterEpisodes from "./FilterEpisodes"

interface nestedProp {
  searchTerm: any
}

function GetEpisode(props: nestedProp): JSX.Element {
  return (
    <section className = "columns">
      {filterEpisodes(mapArray, props.searchTerm)
        .map((ep) => (
        <ShowEpisode
          key={ep.id}
          id={ep.id}
          url={ep.url}
          name={ep.name}
          season={ep.season}
          number={ep.number}
          type={ep.type}
          airdate={ep.airdate}
          airtime={ep.airtime}
          airstamp={ep.airstamp}
          runtime={ep.runtime}
          image={ep.image}
          summary={ep.summary}
          _links={ep._links}
        />
      ))}
    </section>
  );
}

export default GetEpisode;
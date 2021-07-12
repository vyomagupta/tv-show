import episodes from "../episodes.json";
import "./Episodes.css";
import { Card } from "react-bootstrap";


interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface Search {
  search: string;
}

function Episodes(props: Search): JSX.Element {
  const filteredList = episodes.filter((episode: IEpisode) => {
    const emptyString = "";
    const searchIncludedInSummary = episode.summary
      .toLowerCase()
      .includes(props.search.toLowerCase());

    const searchIncludedInName = episode.name
      .toLowerCase()
      .includes(props.search.toLowerCase());

    if (emptyString || searchIncludedInSummary || searchIncludedInName) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>

      <h4>Displaying: {filteredList.length}/73 episodes</h4>
      <div className="card-container">
        {filteredList.map((filteredEpisode: IEpisode) => (
          <div key={filteredEpisode.id}>
            <Card className="card" style={{ width: "30rem", height: "35em" }}>
              <Card.Title className="card-title">
                <b>
                  {filteredEpisode.name} - S
                  {String(filteredEpisode.season).padStart(2, "0")} E
                  {String(filteredEpisode.number).padStart(2, "0")}
                </b>
              </Card.Title>
              <Card.Img
                className="card-img-top"
                variant="top"
                src={filteredEpisode.image.medium}
                alt="scene from episode"
              />
              <Card.Body className="card-block">
                <Card.Text>{filteredEpisode.summary}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <hr />
      <p>
        This data has been obtained from:
        <a href="https:WWW.TVMaze.com"> TVMaze</a>
      </p>
    </div>
  );
}

export default Episodes;
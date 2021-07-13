export interface IEpisode {
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
      
      function ShowEpisode(props: IEpisode): JSX.Element {
	return (
	    <section className = "eachEpisode">
	      <h1 className = "title">
		{props.name} - S{props.season.toString().padStart(2, "0")}E{props.number.toString().padStart(2, "0")}
	      </h1>
	      <div className = "picture">
		<img src={props.image.medium} alt=""/>
	      </div>
	      <p>{props.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}</p>
	    </section>
	);
      }
      
      export default ShowEpisode;
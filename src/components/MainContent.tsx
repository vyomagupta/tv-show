import GetEpisode from "./GetEpisode";

interface nestedProp {
    searchTerm: string
}

function MainContent({searchTerm}: nestedProp): JSX.Element {
    return (
        <main>
        <GetEpisode 
        searchTerm={searchTerm} />
        </main>
    );
}

export default MainContent;
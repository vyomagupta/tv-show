import GetEpisode from "./ReceivingEpisodes";

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
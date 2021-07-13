import { IEpisode } from "../components/Episodes";

export default function episodesFilter(episodeArr: IEpisode[], searchTerm: string) {
    return episodeArr.filter((ep) => ep.name.toLowerCase().includes(searchTerm.toLowerCase()) || ep.summary.toLowerCase().includes(searchTerm.toLowerCase()));
} 
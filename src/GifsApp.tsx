import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";

import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";

import { useGifs } from "./gifs/hooks/useGifs";


export const GifsApp = () => {

    const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

    return (
        <>
            {/* CustomHeader */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

            {/* SearchBar */}
            <SearchBar 
                placeholder="Busca lo que quieras"
                onQuery={ handleSearch }
            />

            {/* PreviousSearches */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={ handleTermClicked }
            />

            {/* Gifs */}
            {/* GifList: Props => gifs: Gif[] */}
            <GifList gifs={gifs}></GifList>
        </>
    );
}

export default GifsApp

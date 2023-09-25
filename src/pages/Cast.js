import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState, Suspense} from 'react';
import { fetchCast } from "api";
import { Wrapper, CastWrapper } from "../components/Cast.styled";


export default function Cast() {

    const [castDetails, setCastDetails] = useState([]);
    const { movieId } = useParams();
    const imgPrefix = "https://image.tmdb.org/t/p/w342"
 
    useEffect(() => {
    async function getCastDetails() {
        try {
        const castDetails = await fetchCast(movieId);
        setCastDetails(castDetails.cast);
        } catch (error) {
            console.log(error)
      } 
    }
    getCastDetails();
    }, [movieId]);


    return (
        <CastWrapper>
            {castDetails.map((cast) => (
                <Wrapper key={cast.id}>
                            <img 
                                src={imgPrefix + cast.profile_path}
                                alt={cast.original_name}
                                width="342" height="530"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png";
                                }}
                            />
                            <p>{cast.original_name}</p>
                            <p>Character: {cast.character}</p>
                
                </Wrapper>
            ))}
             <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </CastWrapper>
    );
     
      
}
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { fetchCast } from "api";


export default function Cast() {

    const [castDetails, setCastDetails] = useState([]);
    const { movieId } = useParams();
    const imgPrefix = "https://image.tmdb.org/t/p/w154"
 
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
    }, []);


    return (
        <div>
            {castDetails.map((cast) => (
                <div key={cast.id}>
                            <img 
                                src={imgPrefix + cast.profile_path}
                                alt={cast.original_name}
                                width="154" height="231"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png";
                                }}
                            />
                            <p>{cast.original_name}</p>
                            <p>Character: {cast.character}</p>
                
                </div>
            ))}
        </div>
    );
     
      
}
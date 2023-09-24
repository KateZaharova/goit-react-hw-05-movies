import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { fetchReview } from "api";



export default function Reviews() {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

 
    useEffect(() => {
    async function getReviews() {
        try {
        const reviews = await fetchReview(movieId);
        setReviews(reviews.results);
        } catch (error) {
            console.log(error)
      } 
    }
    getReviews();
    }, []);


    return (
        <div>
            {reviews.map((review) => (
                <div key={review.id}>            
                    <p><b>Author: {review.author}</b></p>
                    <p>{review.content}</p>              
                </div>
            ))}
        </div>
    );
     
      
}


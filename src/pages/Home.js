import { Link, Outlet } from "react-router-dom";
import { fetchPopularMoviesToday } from "api";


export default function Home() {
    const moviesList = fetchPopularMoviesToday();
    return (
        <div>
            <main>
            <h1>Trending today</h1>
            <ul>
                <li key="{id}" moviesList={ moviesList}>
                    <Link to="movieList"></Link>
                </li>
            </ul>
        </main>
        <Outlet/>
        </div >
            
        
    )
}




/*
/trending/get-trending список найпопулярніших фільмів 
на сьогодні для створення колекції на головній сторінці.
*/
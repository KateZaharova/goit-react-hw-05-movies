import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/search/movie?&api_key=262609caf2a64b4b637675370ec91f76"

export const fetchPopularMoviesToday = async () => {
    const resp = await axios.get("/trending");
    return resp.data;
};

/*  /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.  */

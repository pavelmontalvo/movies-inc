import React, { useState, useEffect } from 'react';
import MovieList from './movieList';
import { orderString } from '../../../utils/helpers';

const MovieListContainer = () => {

    const [movies,setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch(process.env.REACT_APP_MOVIES_PLAYING);
        const dataMovies = await response.json();
        setMovies(dataMovies.results.sort(orderString));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return <MovieList movies={movies} />
};

export default MovieListContainer;
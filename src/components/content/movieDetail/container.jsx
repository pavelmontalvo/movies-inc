import React, { useEffect, useState } from 'react';
import MovieDetail from './movieDetail';
import { useLocation, useNavigate } from 'react-router-dom';

const MovieDetailContainer = () => {

    const location = useLocation();
    const dataMovie = location.state;
    const [cast,setCast] = useState([]);
    const [genres,setGenres] = useState([]);
    const [rating,setRating] = useState(0);
    const [session,setSession] = useState('');
    const [viewMessage,setViewMessage] = useState(false);
    const [loading,setLoading] = useState(false);
    const [similaryMovies,setSimilaryMovies] = useState([]);

    const fetchGenres = async () => {
        const response = await fetch(process.env.REACT_APP_MOVIES_GENRES);
        const dataGender = await response.json();
        setGenres(dataGender.genres);
    };

    const fetchCredits = async () => {
        setLoading(true);
        const { id } = location.state;
        const url = (process.env.REACT_APP_MOVIES_CREDITS).replace('{id}', id);
        const response = await fetch(url);
        const dataCredits = await response.json();
        setCast(dataCredits.cast);
        setLoading(false);
    };

    const fetchSession = async () => {
        const response = await fetch(process.env.REACT_APP_GUEST_SESSION);
        const dataSession = await response.json();
        setSession(dataSession.guest_session_id);
    };

    const fetchSimilaryMovies = async () => {
        const { id } = dataMovie;
        const url = (process.env.REACT_APP_SIMILARY_MOVIES).replace('{id}', id);
        const response = await fetch(url);
        const dataMovies = await response.json();
        setSimilaryMovies(dataMovies.results);
    }

    const findGenres = () => {
        const genresId = dataMovie.genre_ids;
        let genresArray = [];
        genresId.map((item) => {
            return genres.forEach((element) => {
                if(element.id === item) {
                    genresArray.push(element.name);
                }
            });
        });
        return genresArray;
    };

    const handleRating = (rate) => {
        setRating(rate);
        sendMovieRating(rate);
    };

    const sendMovieRating = async (rate) => {
        const { id } = dataMovie;
        const postData = {
            value: Number(rate/10)
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        };
        const url = process.env.REACT_APP_MOVIE_RATING
                        .replace('{id}', id)
                        .replace('{session}', session)
        await fetch(url, requestOptions);
        setViewMessage(true);
        setTimeout(() => {
            setViewMessage(false);
        }, 1000);
    };
    
    useEffect(() => {
        fetchSession();
        fetchGenres();
        fetchCredits();
        fetchSimilaryMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        window.scroll({ top: 0, behavior: 'smooth' });
    }, [location.state.id]);

    return (
        <MovieDetail
            data={dataMovie}
            cast={cast}
            genres={findGenres()}
            rating={rating}
            handleRating={handleRating}
            viewMessage={viewMessage}
            loading={loading}
            similaryMovies={similaryMovies}
        />
    )
};

export default MovieDetailContainer;
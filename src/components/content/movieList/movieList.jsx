import React from 'react';
import Movie from '../movie';
import './index.scss';

const MovieList = ({
    movies
}) => (
    <div className='movieList-container'>
        {movies.map((item) => 
            <Movie
                key={item.id}
                id={item.id}
                title={item.title}
                poster={item.poster_path}
                release={item.release_date}
                voteAverage={item.vote_average}
                {...item}
            />
        )}
    </div>
);

export default MovieList;
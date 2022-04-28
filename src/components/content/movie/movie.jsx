import React from 'react';
import './index.scss';

const Movie = ({
    id,
    poster,
    title,
    releaseDate,
    voteAverage,
    handleClickCard
}) => {

    return (
        <div className='movie-card' onClick={() => handleClickCard(id)}>
            <img className='movie-card__poster' src={`${process.env.REACT_APP_IMAGE_PATH}${poster}`} alt={title}/>
            <h2 className='movie-card__title'>{title}</h2>
            <div className='movie-card__release'>{releaseDate}</div>
            <div className='movie-card__circle'>{Number(voteAverage).toFixed(2)}</div>
        </div>
    )
};

export default Movie;
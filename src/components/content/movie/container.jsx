import React from 'react';
import Movie from './movie';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/helpers';

const MovieContainer = ({
    release,
    ...props
}) => {

    const navigate = useNavigate();
    
    const handleClickCard = (id) => {
        navigate(`/${id}`, { state: props });
    }

    return (
        <Movie
            handleClickCard={handleClickCard}
            releaseDate={formatDate(release)}
            {...props}
        />
    )
};

export default MovieContainer;
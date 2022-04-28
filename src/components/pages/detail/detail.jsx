import React from 'react';
import MovieDetail from '../../content/movieDetail';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Detail = () => {

    const navigate = useNavigate();

    return (
        <div className='detail-page'>
            <div className='container'>
                <div className='step-content' onClick={() => navigate('/')}>
                    <div className='chevron-arrow'/>
                    <div className='step-content__text'>BACK TO HOME</div>
                </div>
                <MovieDetail />
            </div>
        </div>
    )
};

export default Detail;
import React from 'react';
import './home.scss';
import MovieList from '../../content/movieList';

const Home = () => {
    return (
        <div className='home-page'>
            <div className='container'>
                <h1 className='title'>Movies Inc.</h1>
                <MovieList />
            </div>
        </div>
    )
};

export default Home;
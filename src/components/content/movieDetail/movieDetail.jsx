import React, { useRef } from 'react';
import Slider from 'react-slick';
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from 'react-simple-star-rating';
import Skeleton from '../skeleton';
import MovieList from '../movieList/movieList';
import { formatDate } from '../../../utils/helpers';

const MovieDetail = ({
    data,
    cast,
    genres,
    rating,
    handleRating,
    viewMessage,
    loading,
    similaryMovies
}) => {

    const PrevArrow = () => (
      <div className='prev-arrow' onClick={() => customSlider.current.slickPrev()} />
    );

    const NextArrow = () => (
      <div className='next-arrow' onClick={() => customSlider.current.slickNext()} />
    );

    const customSlider = useRef();
    const settings = {
        variableWidth: true,
        centerMode: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return(
        <div className='movie-detail__container'>
            <div className='movie-detail__row'>
                <div className='movie-detail__poster' >
                  <img src={`${process.env.REACT_APP_IMAGE_PATH}${data.poster}`} alt={data.title}/>
                  <div className='movie-detail__circle'>{Number(data.voteAverage).toFixed(2)}</div>
                </div>
                <div className='movie-detail__summary'>
                    <h2 className='title'>{data.title}</h2>
                    <div className='release'>{formatDate(data.release_date)}</div>
                    <div className='genres'>{genres.join(", ")}</div>
                    <div className='rating'>
                      <Rating onClick={handleRating} ratingValue={rating} />
                      {viewMessage &&
                        <div className='movie-detail__message'>
                          Your rating has been sent.
                        </div>
                      }
                    </div>
                    <div className='subtitle'>Overview</div>
                    <div className='overview'>{data.overview}</div>
                </div>
            </div>
            <div className='movie-detail__cast'>
              Movie Cast
            </div>
            {loading?
              <div className='skeleton-container'>
                <Skeleton width={"200px"} height={"300px"} />
                <Skeleton cn="hide-mob" width={"200px"} height={"300px"} />
                <Skeleton cn="hide-mob" width={"200px"} height={"300px"} />
                <Skeleton cn="hide-mob" width={"200px"} height={"300px"} />
                <Skeleton cn="hide-mob" width={"200px"} height={"300px"} />
              </div>
              :
              <div className='card-slider'>
                  <div className='slideCard'>
                      <Slider
                          ref={slider => (customSlider.current = slider)}
                          {...settings}
                      >
                        {cast.map((item) => {
                            return (
                              <div>
                                {item.profile_path &&
                                  <div className='cast-card' key={item.cast_id}>
                                    <img className='cast-card__poster' src={`${process.env.REACT_APP_IMAGE_PATH}${item.profile_path}`} alt={item.original_name} />
                                    <div className='cast-card__title'>{item.original_name}</div>
                                    <div className='cast-card__subtitle'>{item.character}</div>
                                  </div>
                                }
                              </div>
                            )
                        })}
                      </Slider>
                  </div>
              </div>
            }
            <div className='movie-detail__cast'>
              Similar Movies
            </div>
            <MovieList
              movies={similaryMovies}
            />
        </div>
    )
};

export default MovieDetail;
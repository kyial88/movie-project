import React from "react";
import {Link} from "react-router-dom";
import { Pagination } from 'swiper/modules';

const List = ({movies}) => {
    return (
        <div className={'row'}>
            {
                movies.results && movies.results.map(movie => {
                    return (
                        <div key={movie.id} className={'col-3'}>
                            <Link to={`/movie/${movie.id}`}>
                                <div className="box">
                                    <img className={'list-img'} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
                                    <h3>{movie.title}</h3>

                                </div>
                            </Link>


                        </div>
                    )
                })
            }
        </div>
    );
};


export default List;
import React from "react";

const List = ({movies}) => {
    return (
        <div className={'row'}>
            {
                movies.results && movies.results.map(movie => {
                    return (
                        <div key={movie.id} className={'col-3'}>
                            <div className="box">
                                <img className={'list-img'} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
                                <h3>{movie.title}</h3>

                            </div>


                        </div>
                    )
                })
            }
        </div>
    );
};


export default List;
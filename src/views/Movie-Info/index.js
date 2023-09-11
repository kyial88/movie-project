import React, {useState,useEffect} from "react";
import { Pagination } from 'swiper/modules';
import Layout from "../../components/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import './style.css'
import Loader from "../../components/Loader";
import {logDOM} from "@testing-library/react";


const MovieInfo = () => {
    const [movie, setMovie] = useState([{}])
    const [movieId,] = useParams()
    const [error, setError] = useState()


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-RUS&api_key=e73ab532e5ef358e2290f26fc4c8197e`)
            .then(res => setMovie(res.data))
            .catch(movie => setMovie(true))
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-RUS&api_key=e73ab532e5ef358e2290f26fc4c8197e`)
            .then(res => (res.data))
            .catch(movie => console.log(res.data))
    }, [movieId])
    // console.log(movie)


    if (movie.id){
        return (
            <Layout>
                <div style={{
                    background:`url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` ,
                    backgraundsize:'cover',
                    backgroundPosition:'center'}}
                >
                    {/*<div className="container">*/}
                    {/*    <div className={'inner-wrapper'}*/}
                            <img className={'movie-img'} src={`https://image.tmdb.org/t/p/w500${movie.page_path}`} alt=''/>


                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Layout>

        );
    } else {
        return (
            <Loader  />
        )
    }
};




export default MovieInfo
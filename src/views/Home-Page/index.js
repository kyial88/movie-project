import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import List from "../../components/List";
import Carousel from "../../components/Carousel";
import { Pagination } from 'swiper/modules';

const HomePage = () => {
    const [movies, setMovies] = React.useState([])
    const [page, setPage]= useState(1)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-RUS&api_key=e73ab532e5ef358e2290f26fc4c8197e`)
            .then(res => setMovies(res.data) )
            .catch(err =>console.log (err) )
    }, [])
    return (
        <Layout>
            <div className="container-wrapper">
            <Carousel movies={movies} />
            </div>
            {/*<div className="container">*/}
            {/*    <List movies={movies}/>*/}
            {/*    <button onClick={() => setPage(1)}>1</button>*/}
            {/*    <button onClick={() => setPage(2)}>2</button>*/}
            {/*    <button onClick={() => setPage(3)}>3</button>*/}
            {/*    <button onClick={() => setPage(4)}>4</button>*/}
            {/*</div>*/}
        </Layout>
    );
};


export default HomePage;
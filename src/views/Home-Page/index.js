import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import List from "../../components/List";
import Carousel from "../../components/Carousel";

const HomePage = () => {
    const [movies, setMovies] = React.useState([])

    useEffect(() => {
        axios('https://api.themoviedb.org/3/movie/popular?api_key=e73ab532e5ef358e2290f26fc4c8197e')
            .then(res => setMovies(res.data) )
            .catch(err =>console.log (err) )
    }, [])
    return (
        <Layout>
            <div className="container">
            <Carousel movies={movies} />
            <List movies={movies} />
            </div>
        </Layout>
    );
};


export default HomePage;